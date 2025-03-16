import React from 'react';

import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import Event from "../components/Event";
import App from "../App";

describe("<Event /> component", () => {
	let EventComponent;
	let allEvents;
	beforeEach(async () => {
		allEvents = await getEvents();
		EventComponent = render(<Event event={allEvents[0]} />);
	});

	test("renders event Title", () => {
		expect(
			EventComponent.queryByText(allEvents[0].summary)
		).toBeInTheDocument();
	});

	test("renders event location", () => {
		expect(
			EventComponent.queryByText(allEvents[0].location)
		).toBeInTheDocument();
	});

	test("renders event details button with the title (show details)", () => {
		expect(EventComponent.queryByText("show details")).toBeInTheDocument();
	});

	test("by default, event's details section should be hidden", () => {
		expect(
			EventComponent.container.querySelector(".details")
		).not.toBeInTheDocument();
	});

	test("shows the details section when the user clicks on the 'show details' button", async () => {
		const user = userEvent.setup();
		await user.click(EventComponent.queryByText("show details"));

		expect(
			EventComponent.container.querySelector(".details")
		).toBeInTheDocument();
		expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
		expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();
	});

	test("hides the details section when the user clicks on the 'hide details' button", async () => {
		const user = userEvent.setup();

		await user.click(EventComponent.queryByText("show details"));
		expect(
			EventComponent.container.querySelector(".details")
		).toBeInTheDocument();
		expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
		expect(EventComponent.queryByText("show details")).not.toBeInTheDocument();

		await user.click(EventComponent.queryByText("hide details"));
		expect(
			EventComponent.container.querySelector(".details")
		).not.toBeInTheDocument();
		expect(EventComponent.queryByText("hide details")).not.toBeInTheDocument();
		expect(EventComponent.queryByText("show details")).toBeInTheDocument();
	});
});

describe('<EventList /> integration', () => {

	test('renders a list of 32 events when the app is mounted and rendered', async () => {
		const AppComponent = render(<App />);
		const AppDOM = AppComponent.container.firstChild;
		const EventListDOM = AppDOM.querySelector('#event-list');
		await waitFor(() => {
		  const EventListItems = within(EventListDOM).queryAllByRole('listitem');
		  expect(EventListItems.length).toBe(32);
		});
	  });

});
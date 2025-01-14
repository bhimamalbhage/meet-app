Meet-App

---

### Project Key Features:

---

### Feature 1: Filter Events By City

User story:  As a user,
I should be able to filter events by city,
So that I can find events relevant to my location.

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
 Given the user hasn’t searched for any city,
 When the user opens the app,
 Then the user should see a list of upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.
 Given the main page is open,
 When the user starts typing in the city textbox,
 Then the user should receive a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
 Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
 When the user selects a city (e.g., “Berlin, Germany”) from the list,
 Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.


### Feature 2: Show/Hide Event Details

User story: As a user,
I should be able to expand or collapse event details,
So that I can see only the information I need at a time.

Scenario 1: An event element is collapsed by default
 Given the user has opened the app,
 When the event list is displayed,
 Then each event should appear in a collapsed state.

Scenario 2:  User can expand an event to see details.
 Given the user is viewing a list of events,
 When the user clicks on an event,
 Then the event should expand to show its details.

Scenario 3: User can collapse an event to hide details
 Given the user has expanded an event to view its details,
 When the user clicks on the event again,
 Then the event should collapse to hide its details.

### Feature 3: Specify Number of Events

User story: As a user,
I should be able to specify the number of events to display,
So that I can control how much information I see at once.

Scenario 1:  When user hasn’t specified a number, 32 events are shown by default.
 Given the user has opened the app,
 When the user has not specified a number of events,
 Then the app should display 32 events by default.

Scenario 2: User can change the number of events displayed.
 Given the user is viewing a list of events,
 When the user changes the number of events displayed,
 Then the app should update to show the specified number of events.

### Feature 4: Use the App When Offline

User story: As a user,
I should be able to access cached event data offline,
So that I can use the app without an internet connection.

Scenario 1: Show cached data when there’s no internet connection.
 Given the user has previously loaded event data AND loses internet connection,
 When the user reopens the app,
 Then the app should display cached event data.

Scenario 2:  Show error when user changes search settings (city, number of events).
 Given the user is offline,
 When the user tries to change the city or the number of events,
 Then the app should display an error message indicating no internet connection.

### Feature 5: Add an App Shortcut to the Home Screen

User story: As a user,
I should be able to add a shortcut for the app to my device’s home screen,
So that I can access it quickly and conveniently.

Scenario 1: User can install the meet app as a shortcut on their device home screen.
 Given the user is using a device that supports Progressive Web Apps,
 When the user selects the option to add the app to their home screen,
 Then the app should install as a shortcut on the user’s home screen.

### Feature 6: Display Charts Visualizing Event Details

User story: As a user,
I should be able to view charts that visualize event data,
So that I can better understand the distribution of events.

Scenario 1:  Show a chart with the number of upcoming events in each city.
 Given the user has opened the app,
 When the user views the charts section,
 Then the app should display a chart showing the number of upcoming events in each city.

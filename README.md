Meet App 

---

### Filter Events by City  
USER STORY:  
As a user,  
I want to filter events by city  
So that I can see a list of events taking place in that city.  

#### Scenario 1: Default view shows events from all cities  
GIVEN the user hasn’t searched for any city,  
WHEN they open the app,  
THEN they should see a list of upcoming events from all cities.  

#### Scenario 2: Display city suggestions while typing  
GIVEN the main page is open,  
WHEN the user starts typing in the city search box,  
THEN they should see a list of suggested cities that match their input.  

#### Scenario 3: User selects a city from suggestions  
GIVEN the user has typed “Berlin” in the city search box AND a list of suggested cities is displayed,  
WHEN the user selects a city (e.g., “Berlin, Germany”) from the suggestions,  
THEN the selected city should become active AND they should see a list of upcoming events in that city.  

---

### Show/Hide Event Details  
USER STORY:  
As a user,  
I want to toggle event details on or off  
So that I can control what information is displayed.  

#### Scenario 1: Show event details  
GIVEN the user wants to view event details,  
WHEN they click the "Show details" button,  
THEN the additional details for the event should be displayed.  

#### Scenario 2: Hide event details  
GIVEN the user wants to hide event details,  
WHEN they click the "Hide details" button,  
THEN the event details should be hidden.  

---

### Specify Number of Events  
USER STORY:  
As a user,  
I want to specify the number of events displayed  
So that I can control how many events I see at once.  

#### Scenario 1: User specifies the number of events  
GIVEN the user specifies a number of events,  
WHEN they search for events,  
THEN only the specified number of events should be displayed.  

#### Scenario 2: User doesn’t specify a number of events  
GIVEN the user doesn’t provide a number,  
WHEN they search for events,  
THEN all events matching the criteria should be displayed.  

---

### Use the App Offline  
USER STORY:  
As a user,  
I want to use the app offline  
So that it is available even without an internet connection.  

#### Scenario: Offline usage with stored app state  
GIVEN the user has previously accessed the app with an internet connection,  
WHEN they are offline,  
THEN they should be able to view the app’s stored state on their device.  

---

### Add an App Shortcut to the Home Screen  
USER STORY:  
As a user,  
I want to add an app shortcut to my home screen  
So that I can access the app quickly.  

*(Note: This is a browser feature and cannot be directly implemented or tested by developers.)*  

---

### Display Charts Visualizing Event Details  
USER STORY:  
As a user,  
I want to view charts visualizing event details  
So that I can easily understand the event data.  

#### Scenario 1: View event data chart on the details page  
GIVEN the user is on the event details page,  
WHEN they view the event details,  
THEN a chart visualizing the event data should be displayed.  

#### Scenario 2: Display specific event data in chart format  
GIVEN the user has selected a specific event,  
WHEN they navigate to the event details page,  
THEN they should see a chart that visually represents the event's data.  

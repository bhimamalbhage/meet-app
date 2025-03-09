import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';


const App = () => {
  const [eventCount, setEventCount] = useState(32);

 return (
   <div>
     <CitySearch />
     <NumberOfEvents setEventCount={setEventCount} />
     <EventList />
   </div>
 );
}


export default App;
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Events from "./pages/Events.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import { useState } from "react";
import EventDetails from "./pages/EventDetails.jsx";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create" element={<CreateEvent addEvent={addEvent} />} />
        <Route path="/events" element={<Events events={events} deleteEvent={deleteEvent} />} />
        <Route path="/edit/:id" element={<EditEvent events={events} updateEvent={updateEvent} />} />
      <Route path="/event/:id" element={<EventDetails events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;

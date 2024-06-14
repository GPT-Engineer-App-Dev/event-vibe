import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Events from "./pages/Events.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import EventDetails from "./pages/EventDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/edit/:id" element={<EditEvent />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
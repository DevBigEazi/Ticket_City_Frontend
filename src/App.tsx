import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExploreEvents from "./Pages /EventsExpore";
import EventDetails from "./Pages /EventDetails";
import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
//import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const { ready } = usePrivy();

  if (!ready) return <h2> Wallet getting ready... </h2>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExploreEvents />} />
        <Route path="/explore" element={<ExploreEvents />} />
        <Route path="/event/:id" element={<EventDetails />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

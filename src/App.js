import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import EventDetail from "./pages/EventDetail";
import HistoryTransaction from "./pages/HistoryTransaction";
import TiketPage from "./pages/TiketPage";
import Data from "./pages/Admin/Data";
import Request from "./pages/Admin/Request";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EORegister from "./pages/EORegister";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="relative">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/eventDetail" element={<EventDetail />} />
          <Route path="/historyTransaction" element={<HistoryTransaction />} />
          <Route path="/ticket" element={<TiketPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eo-register" element={<EORegister />} />

          <Route path="/data" element={<Data />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

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
import MyEvent from "./pages/EO/MyEvent";
import CreateEvent from "./pages/EO/CreateEvent";
import { AuthContextProvider } from "./context/AuthContext";
import EventApproval from "./pages/Admin/EventApproval";
import MyEventDetail from "./pages/EO/MyEventDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Homepage />} />
              <Route path="/eventDetail" element={<EventDetail />} />
              <Route
                path="/historyTransaction"
                element={<HistoryTransaction />}
              />
              <Route path="/ticket" element={<TiketPage />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/data" element={<Data />} />
              <Route path="/request" element={<Request />} />
              <Route
                path="/request/event/:event_id"
                element={<EventApproval />}
              />

              <Route path="/myEvent" element={<MyEvent />} />
              <Route path="/createEvent" element={<CreateEvent />} />
              <Route path="/myEvent/:event_id" element={<MyEventDetail />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/eo-register" element={<EORegister />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;

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
import EventApproval from "./pages/Admin/EventApproval";
import MyEventDetail from "./pages/EO/MyEventDetail";
import EditEvent from "./pages/EO/EditEvent";
import Categories from "./pages/Admin/Categories";
import AccountInformation from "./pages/Admin/AccountInformation";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/eo-register" element={<EORegister />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/eventDetail" element={<EventDetail />} />

            <Route
              element={
                <ProtectedRoutes
                  role={["USER", "ADMIN", "EVENT_ORGANIZER"]}
                  redirectPage={"/login"}
                />
              }
            >
              <Route path="/ticket" element={<TiketPage />} />
              <Route
                path="/historyTransaction"
                element={<HistoryTransaction />}
              />
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route element={<ProtectedRoutes role={["ADMIN"]} />}>
              <Route path="/categories" element={<Categories />} />
              <Route path="/data" element={<Data />} />
              <Route path="/data/:user_id" element={<AccountInformation />} />
              <Route path="/request" element={<Request />} />
              <Route
                path="/request/event/:event_id"
                element={<EventApproval />}
              />
            </Route>

            <Route element={<ProtectedRoutes role={["EVENT_ORGANIZER"]} />}>
              <Route path="/myEvent" element={<MyEvent />} />
              <Route path="/createEvent" element={<CreateEvent />} />
              <Route path="/editEvent/:id" element={<EditEvent />} />
              <Route path="/myEvent/:event_id" element={<MyEventDetail />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

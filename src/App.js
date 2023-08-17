import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import EventDetail from './pages/EventDetail';
import HistoryTransaction from './pages/HistoryTransaction';
import TiketPage from './pages/TiketPage';
import Data from './pages/Admin/Data'
import Request from './pages/Admin/Request';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/eventDetail' element={<EventDetail/>}/>
          <Route path='/historyTransaction' element={<HistoryTransaction/>}/>
          <Route path='/ticket' element={<TiketPage/>}/>
          
          <Route path='/data' element={<Data/>}/>
          <Route path='/request' element={<Request/>}/>
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;

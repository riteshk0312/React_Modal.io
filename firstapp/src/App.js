
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Modaltask from './Components/Modaltask';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/modaltask' element={<Modaltask/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

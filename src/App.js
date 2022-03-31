import './App.scss';
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './components/Pages/Home/Home';

function App() {
  return (
    <>
    <Router>
     
     <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;


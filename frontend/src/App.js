import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddProperties from './pages/AddProperties'
import Register from './pages/Register';
import Show from './pages/Show';
import Login from'./pages/Login'
import Home from './pages/Home'; 
import Buy from './pages/Buy';
import Sale from './pages/Sale';
import Rent from './pages/Rent';
import Contact from './pages/Contact';
import Dashboard from './pages/DashBorad';
import Profile from './pages/Profile';
import About from './pages/AboutUs';



function App() {
  return (

    <Router>
      <NavBar />
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/rent' element={<Rent />} />
          <Route path='/about' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/propertes'element={<AddProperties />}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Show/:id' element={<Show />} />
          <Route path='/Profile' element={<Profile />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Link } from 'react-router-dom';
import ali from '../asset/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToProfile = () => {
    navigate('/Profile');
  };

  const goToProperties = () => {
    navigate('/propertes');
  };

  return (
    <div className="relative">
      <nav className='py-4 bg-gray-300 bg-opacity-25 shadow-md w-screen fixed top-0 z-50'>
        <div className='container mx-auto flex justify-between items-center px-4 md:px-0'>
          <div className='flex items-center space-x-2'>
            <Link to="/"><img src={ali} alt="Logo" className="h-8" /></Link>
          </div>

          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-800 text-2xl'>
              <GiHamburgerMenu />
            </button>
          </div>

          <ul className='hidden md:flex space-x-8'>
            <li><Link to="/" className="text-[#E7C873] hover:text-[#1F4B43] text-base md:text-lg lg:text-xl font-semibold">Home</Link></li>
            <li><Link to="/buy" className="text-[#E7C873] hover:text-[#1F4B43] text-lg font-semibold">Buy</Link></li>
            <li><Link to="/sale" className="text-[#E7C873] hover:text-[#1F4B43] text-lg font-semibold">Sale</Link></li>
            <li><Link to="/rent" className="text-[#E7C873] hover:text-[#1F4B43] text-lg font-semibold">Rent</Link></li>
            <li><Link to="/about" className="text-[#E7C873] hover:text-[#1F4B43] text-base md:text-lg lg:text-xl font-semibold">About Us</Link></li>
            <li><Link to="/contact" className="text-[#E7C873] hover:text-[#1F4B43] text-lg font-semibold">Contact</Link></li>
          </ul>

          <div className='hidden md:flex items-center space-x-4'>
            <FaUserCircle onClick={goToProfile} className='text-gray-800 text-2xl cursor-pointer' />
            <button onClick={goToProperties} className="border border-gray-800 text-gray-800 py-2 px-4 rounded hover:bg-[#1F4B43] hover:text-white">Add Property</button>
          </div>
        </div>

        {menuOpen && (
          <div className='md:hidden fixed top-0 right-0 h-full w-2/3 bg-gray-100 shadow-lg px-4 py-6 z-50'>
            <button onClick={toggleMenu} className='absolute top-4 left-4 text-gray-800 text-2xl'>
              &times;
            </button>
            <ul className='flex flex-col space-y-4 mt-8'>
              <li><Link to="/" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/buy" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Buy</Link></li>
              <li><Link to="/sale" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Sale</Link></li>
              <li><Link to="/rent" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Rent</Link></li>
              <li><Link to="/about" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/contact" className="text-[#1F4B43] hover:text-gray-600" onClick={toggleMenu}>Contact</Link></li>
            </ul>
            <div className='mt-6 flex items-center space-x-4'>
              <FaUserCircle onClick={goToProfile} className='text-gray-800 text-2xl cursor-pointer' />
              <button onClick={goToProperties} className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-[#1F4B43] hover:text-white w-full">Add Property</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;

import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ itemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop/:name" },
    { name: "Sale", path: "/sale" },
    { name: "Blog", path: "/blog" },
    { name: "Showcase", path: "/showcase" }
  ];

  const NavItem = ({ item }) => (
    <li>
      <NavLink 
        to={item.path}
        className={({ isActive }) => `
          text-center p-2 rounded-full cursor-pointer 
          ${isActive ? "bg-white text-black" : "text-white hover:bg-slate-800"}
        `}
        end
      >
        {item.name}
      </NavLink>
    </li>
  );

  return (
    <div className="py-2 px-4 bg-slate-950">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="flex items-center text-xl text-white">
          Rasy Shop<ShoppingCart className="ml-2" />
        </Link>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:block p-4 rounded-full bg-slate-500 bg-opacity-15 w-2/4">
          <ul className="flex justify-between">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden lg:flex p-2">
          <div className='relative'>
            <Link to='/shop/cart'>
              <ShoppingCart 
                size={40} 
                className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800" 
              />
            </Link>
            <p className='absolute text-white top-0 right-0 bg-blue-500 rounded-full h-5 w-5 text-xs flex items-center justify-center'>
              {itemCount}
            </p>
          </div>
          <button className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800">Login</button>
          <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800">Sign up</button>
        </div>
      </div>

     {/* Mobile navigation */}
    {isMenuOpen && (
      <div className="lg:hidden mt-4 bg-gray-900">
        {/* Centered navigation items */}
        <nav className="p-1 rounded-full  bg-opacity-15">
          <ul className="flex flex-col items-center space-y-2"> {/* items-center to center horizontally */}
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>

        {/* Centered cart and buttons */}
        <div className="flex flex-col items-center mt-4 space-y-2"> {/* Flex column to stack items and center them */}
          <div className="relative">
            <Link to='/shop/cart'>
              <ShoppingCart size={40} className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800" />
            </Link>
            <p className="absolute text-white top-0 right-0 bg-blue-500 rounded-full h-5 w-5 text-xs flex items-center justify-center">
              {itemCount}
            </p>
          </div>
          <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800">Login</button>
          <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2 hover:bg-slate-800">Sign up</button>
        </div>
      </div>
    )}

    </div>
  );
};

export default Navbar;
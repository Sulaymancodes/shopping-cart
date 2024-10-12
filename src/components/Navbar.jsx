import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const navItems = ["Home", "Shop", "Sale", "Blog", "Showcase"];

  return (
    <div className="py-2 px-4 bg-slate-950">
      <div className="flex justify-between items-center w-full">
        <p className="flex items-center text-xl text-white">Shopping<ShoppingCart className="ml-2" /></p>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:block p-1 rounded-full bg-slate-500 bg-opacity-15 w-2/4">
          <ul className="flex justify-between">
            {navItems.map((item) => (
              <li
                key={item}
                className={`text-center p-2 rounded-full w-1/5 cursor-pointer ${
                  activeItem === item
                    ? "bg-white text-black"
                    : "text-white hover:bg-slate-800"
                }`}
                onClick={() => handleItemClick(item)}
              >
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden lg:flex p-2">
          <ShoppingCart size={40} className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2" />
          <button className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Login</button>
          <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Sign up</button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <nav className="p-1 rounded-full bg-slate-500 bg-opacity-15">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`text-center p-2 rounded-full cursor-pointer ${
                    activeItem === item
                      ? "bg-white text-black"
                      : "text-white hover:bg-slate-800"
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center mt-4 space-x-2">
            <ShoppingCart size={40} className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2" />
            <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Login</button>
            <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
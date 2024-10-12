import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

import { useState } from "react";
function App() {
  const [activeItem, setActiveItem] = useState("Home");
   
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="bg-slate-950 min-h-screen m-0 p-0">
      <Navbar activeItem={activeItem} handleItemClick={handleItemClick}/>
      <Link to={"profile"}>Click here to go to Home Page</Link>
      <Mainsection />
      <Footer />
    </div>
  )
}

export default App

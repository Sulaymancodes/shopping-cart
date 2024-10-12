import { ShoppingCart } from "lucide-react";

export default function Navbar({ activeItem, handleItemClick }) {
    return (
        <>
            <div className="py-2 px-4 flex justify-between items-center w-full">
                <p className="flex items-center text-xl text-white">Shopping<ShoppingCart /> </p>
                <nav className="p-1 rounded-full bg-slate-500 bg-opacity-15 w-2/4">
                    <ul className="flex justify-between">
                        {["Home", "Shop", "Sale", "Blog", "Showcase"].map((item) => (
                        <li
                            key={item}
                            className={`text-center p-2 rounded-full w-1/5 cursor-pointer ${
                            activeItem === item
                                ? "bg-white text-black"  // Active state styles
                                : "text-white hover:bg-slate-800"  // Default styles
                            }`}
                            onClick={() => handleItemClick(item)}
                        >
                            <a href="#">{item}</a>
                        </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex p-2">
                    <ShoppingCart size={40} className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2" />
                    <button className="mr-2 bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Login</button>
                    <button className="bg-slate-500 bg-opacity-15 text-white rounded-full p-2">Sign up</button>
                </div>
            </div>
        </>
    );
}
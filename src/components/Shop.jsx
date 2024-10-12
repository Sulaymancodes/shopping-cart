import Navbar from "./Navbar";
import Footer from "./Footer";
import { useProductURL } from "../hook/UseProductURL";
import { Minus, Plus } from "lucide-react"
import { useState } from "react";

export default function Shop () {
    const { loading, jewelry, error} = useProductURL('https://fakestoreapi.com/products')
    const [count, setCount] = useState(0)
    
     return (
        <>
        <Navbar />
        <div className="text-center mt-10">
             {loading && (
               <p className="text-white text-2xl">...Loading</p>
             )}
             {error && (
                 <p>{error}</p>
             )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4">
                 {jewelry.map((item) => (
                     <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                     <div className="aspect-square relative overflow-hidden bg-gray-100">
                         <img 
                         src={item.image} 
                         alt={item.title} 
                         className="absolute inset-0 w-full h-full object-contain"
                         />
                     </div>
                     <div className="p-4 flex flex-col flex-grow">
                         <h3 className="text-lg font-semibold mb-2 text-gray-800 truncate">{item.title}</h3>
                         <p className="text-gray-600 font-medium mb-3">${item.price.toFixed(2)}</p>
                         <div className="flex my-0 mx-auto">
                             <button onClick={() => count < 1 ? setCount(0) : setCount(count - 1)}><Minus /></button>
                             <p>{count}</p>
                             <button onClick={() => setCount(count + 1)}><Plus /></button>
                         </div>
                         <button className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                         Add to Cart
                         </button>
                     </div>
                     </div>
                 ))}
            </div>
            <Footer />
         </div>
        </>
         
     
     )
 }
 
 
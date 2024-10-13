import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useProductURL } from "../hook/UseProductURL"


export default function Mainsection () {
   const { loading, jewelry, error} = useProductURL('https://fakestoreapi.com/products/category/jewelery?limit=4')
   const [count, setCount] = useState(0)
   
    return (
        <div className="text-center">
           <button className="text-white my-4 rounded-full p-2 border-2 border-slate-400 hover:bg-white hover:text-black">New Spring Collection 2024</button>
           <h1 className="text-white font-mono text-4xl w-2/4 my-0 mx-auto">Where style speaks, trends resonate, fashion flourishes</h1>
           <p className="text-slate-400 w-1/4 my-0 mx-auto text-xs mb-2">Unveiling a fashion destination where trends blends seamlessly with your individual style aspirations. Discover today!</p>
            {loading && (
              <p className="text-white text-2xl">...Loading</p>
            )}
            {error && (
                <p className="text-white text-5xl">{error}</p>
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
        </div>
    
    )
}


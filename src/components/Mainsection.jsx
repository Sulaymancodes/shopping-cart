import Footer from "./Footer"
import { useProductURL } from "../hook/UseProductURL"

export default function Mainsection () {
    const { loading, shopItems, error} = useProductURL('https://fakestoreapi.com/products/category/jewelery?limit=4')
    // // const [count, setCount] = useState([])

    
    // useEffect(() => {
    //   setCount(Array(shopItems.length).fill(0))
    // },[shopItems])

    // function addCount (index) {
    //     const newCount = [...count];
    //     newCount[index] += 1;
    //     setCount(newCount)
    // }

    // function minusCount (index) {
    //     const newCount = [...count];
    //     if (newCount[index] > 0) {
    //         newCount[index] -= 1
    //     }
    //     setCount(newCount)
    // }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header or any top content */}
            <div className="text-center flex-grow mb-4">
                <button className="text-white my-4 rounded-full p-2 border-2 border-slate-400 hover:bg-white hover:text-black">
                    New Spring Collection 2024
                </button>
                <h1 className="text-white font-mono text-4xl w-2/4 my-0 mx-auto">
                    Where style speaks, trends resonate, fashion flourishes
                </h1>
                <p className="text-slate-400 w-1/4 my-0 mx-auto text-xs mb-2">
                    Unveiling a fashion destination where trends blend seamlessly with your individual style aspirations. Discover today!
                </p>
    
                {/* Loading and error states */}
                {loading && <p className="text-white text-4xl">...Loading</p>}
                {error && <p className="text-white text-3xl">{error}</p>}
    
                {/* Shop Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4">
                    {shopItems.map((item) => (
                        <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
                            <div className="aspect-square relative overflow-hidden bg-gray-100">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 truncate">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-medium mb-3">
                                    ${item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
            {/* Footer */}
            <Footer />
        </div>
    )
}


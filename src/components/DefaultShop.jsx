export default function DefaultShop ({cartMsg, loading, error, shopItems, count, Minus, Plus, addCount, minusCount, handleAddtoCart} ) {
    return (
        <>
        {cartMsg && (
            <div className="rounded-md p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-1/5 z-50">
            <p className="text-white text-xl">Item Added Successfully</p>
            </div>
        )}
        <div className="text-center mt-10 ">
             {loading && (
               <p className="text-black text-2xl">...Loading</p>
             )}
             {error && (
                 <p className="text-5xl">{error}</p>
             )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4">
                 {shopItems.map((item, index) => (
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
                             <button onClick={() => minusCount(index)}><Minus /></button>
                             <p>{count[index]}</p>
                             <button onClick={() => addCount(index)}><Plus /></button>
                         </div>
                         <button onClick={() => handleAddtoCart(index)} className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                         Add to Cart
                         </button>
                     </div>
                     </div>
                 ))}
            </div>
         </div>
        </>
)}
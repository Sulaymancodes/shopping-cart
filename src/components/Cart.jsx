import { Minus, Plus, ShoppingCart } from 'lucide-react';
import Footer from './Footer';

export default function Cart({ cartArr, cartArrCount, updateQuantity }) {
    const total = cartArr.reduce((sum, item, index) => sum + item.price * cartArrCount[index], 0);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Cart content */}
            <div className="container mx-auto px-4 py-8 flex-grow">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cartArr.map((item, index) => (
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
                                <div className="flex items-center justify-center my-2">
                                    <button onClick={() => updateQuantity(index, -1)} className="text-gray-500 hover:text-gray-700">
                                        <Minus size={20} />
                                    </button>
                                    <p className="mx-4 text-lg font-semibold">{cartArrCount[index]}</p>
                                    <button onClick={() => updateQuantity(index, 1)} className="text-gray-500 hover:text-gray-700">
                                        <Plus size={20} />
                                    </button>
                                </div>
                                <p className="text-right font-semibold text-lg mt-2">
                                    Total: ${(item.price * cartArrCount[index]).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {cartArr.length > 0 ? (
                    <div className="mt-8 flex flex-col items-end">
                        <p className="text-2xl font-bold mb-4">Grand Total: ${total.toFixed(2)}</p>
                        <button className="bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 flex items-center">
                            <ShoppingCart className="mr-2" />
                            Proceed to Checkout
                        </button>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 mt-8">Your cart is empty.</p>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

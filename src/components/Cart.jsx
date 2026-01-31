import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function Cart() {
    const { cart, clearCart, removeItem, total } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="pt-32 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-fruit-600 mb-4">Tu carrito está vacío</h1>
                <Link 
                    to="/" 
                    className="bg-fruit-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-fruit-700 transition-colors"
                >
                    Volver a la tienda
                </Link> 
            </div>
        );
    }

    return (
        <div className="pt-24 max-w-4xl mx-auto px-4 pb-12">
            <h2 className="text-3xl font-bold text-fruit-800 mb-8 border-b-2 border-fruit-200 pb-2">
                Tu Compra
            </h2>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {cart.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50">
        
                        <img 
                            src={product.img} 
                            alt={product.name} 
                            className="w-24 h-24 object-cover rounded-lg mr-6 border border-gray-200" 
                        />
                        
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                            <p className="text-gray-500">Cantidad: {product.quantity}</p>
                            <p className="text-fruit-600 font-semibold">Precio unit: ${product.price}</p>
                        </div>

                        <div className="mx-4 text-right">
                            <p className="text-sm text-gray-500">Subtotal</p>
                            <p className="text-xl font-bold text-gray-900">
                                ${product.price * product.quantity}
                            </p>
                        </div>
 
                        <button 
                            onClick={() => removeItem(product.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title="Eliminar producto"
                        >
                            <Trash2 className="w-6 h-6" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Resumen Final */}
            <div className="mt-8 flex flex-col items-end">
                <div className="text-3xl font-bold text-gray-900 mb-6">
                    Total: <span className="text-fruit-700">${total}</span>
                </div>
                
                <div className="flex gap-4">
                    <button 
                        onClick={clearCart}
                        className="px-6 py-3 text-gray-600 hover:text-red-600 font-semibold transition-colors"
                    >
                        Vaciar Carrito
                    </button>
                    
                    <Link 
                        to="/checkout" 
                        className="bg-fruit-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-fruit-700 shadow-lg hover:shadow-xl transition-all"
                    >
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
}
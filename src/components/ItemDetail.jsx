import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ItemDetail({ id, name, price, category, img, description, stock }) {
    const [count, setCount] = useState(1);
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleIncrease = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        setQuantityAdded(count);
        const item = {
            id, 
            name, 
            price, 
            img
        };
        addItem(item, count);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="relative h-96 md:h-auto rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={img} alt={name} className="max-h-80 md:max-h-[28rem] w-auto max-w-full object-contain rounded-md shadow-sm" />
            </div>

            <div className="p-2 flex flex-col justify-between">
                <div>
                  <span className="text-sm text-fruit-500 font-semibold uppercase tracking-wide mb-2 inline-block">{category}</span>
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{name}</h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-fruit-700 block">${price}</span>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block mt-2">Stock disponible: {stock}</span>
                      </div>
                  </div>

                  <div className="space-y-4">
                      {quantityAdded > 0 ? (
                        <Link to="/cart" className="w-full block text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                            Terminar compra
                        </Link>
                    ) : (
                        <>
                            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 border border-gray-200">
                                <button onClick={handleDecrease} className="w-10 h-10 font-bold text-xl text-fruit-600">-</button>
                                <span className="text-xl font-bold text-gray-800">{count}</span>
                                <button onClick={handleIncrease} className="w-10 h-10 font-bold text-xl text-fruit-600">+</button>
                            </div>
                            <button 
                                onClick={handleAdd}
                                className="w-full bg-fruit-600 text-white py-4 rounded-lg font-bold hover:bg-fruit-700"
                            >
                                Agregar al Carrito
                            </button>
                        </>
                    )}
                  </div>
                </div>
            </div>
        </div>
    );
}
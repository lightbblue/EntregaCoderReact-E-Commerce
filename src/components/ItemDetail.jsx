import { useState } from "react";

export default function ItemDetail({ id, name, price, category, img, description, stock }) {
    const [count, setCount] = useState(1);

    const handleIncrease = () => {
        if (count < stock) setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAdd = () => {
        alert(`Agregaste ${count} unidades de ${name} al carrito`);
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
                      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2 border border-gray-200">
                          <button 
                              onClick={handleDecrease}
                              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${count <= 1 ? 'text-gray-300' : 'text-fruit-600 hover:bg-fruit-100 font-bold text-xl'}`}
                              disabled={count <= 1}
                          >
                              -
                          </button>
                          <span className="text-xl font-bold text-gray-800">{count}</span>
                          <button 
                              onClick={handleIncrease}
                              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${count >= stock ? 'text-gray-300' : 'text-fruit-600 hover:bg-fruit-100 font-bold text-xl'}`}
                              disabled={count >= stock}
                          >
                              +
                          </button>
                      </div>

                      <button 
                          onClick={handleAdd}
                          className="w-full bg-gradient-to-r from-fruit-600 to-fruit-700 text-white py-4 rounded-lg font-bold text-lg hover:from-fruit-700 hover:to-fruit-800 transform active:scale-95 transition-all shadow-lg"
                      >
                          Agregar al Carrito
                      </button>
                  </div>
                </div>
            </div>
        </div>
    );
}
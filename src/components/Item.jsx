import { Link } from 'react-router-dom';

export default function Item({ id, name, price, img, category }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 hover:scale-102 transition-all duration-300 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
        <span className="absolute top-3 left-3 bg-fruit-50 text-fruit-600 text-xs font-semibold px-3 py-1 rounded-full shadow capitalize">{category}</span>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-fruit-500 to-fruit-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow">${price}</div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{name}</h2>
        <div className="mt-auto">
          <Link 
            to={`/item/${id}`} 
            className="w-full block text-center bg-fruit-600 text-white py-2 rounded-md font-semibold hover:bg-fruit-700 transition-colors"
            aria-label={`Ver detalles de ${name}`}
          >
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
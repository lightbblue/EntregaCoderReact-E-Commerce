import { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="relative cursor-pointer group">
      <ShoppingCart className="w-6 h-6 text-gray-500 transition-colors group-hover:text-fruit-900" />
      
      { totalQuantity > 0 ? (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalQuantity}
        </span>
      ) : "" }

    </Link>
  );
};

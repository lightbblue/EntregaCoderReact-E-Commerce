import { ShoppingCart } from 'lucide-react';

export default function CartWidget() {
  return (
    <div className="relative cursor-pointer group">
      <ShoppingCart className="w-6 h-6 text-gray-500 transition-colors group-hover:text-fruit-900" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
        3
      </span>
    </div>
  );
};

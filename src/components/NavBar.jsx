import { Menu, Search } from 'lucide-react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  const links = [
    { name: "Celulares", path: "/category/celulares" },
    { name: "Tablets", path: "/category/tablets" },
    { name: "Notebooks", path: "/category/notebooks" },
    { name: "Accesorios", path: "/category/accesorios" },
  ];

  return (
    <nav className="bg-fruit-300 shadow-2xs w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-black tracking-wider italic">
              Fake-Market
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <NavLink 
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  isActive 
                    ? "text-fruit-950 font-bold border-b-2 border-fruit-950 pointer-events-none" 
                    : "text-gray-600 hover:text-fruit-950 font-medium transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-fruit-950 hidden sm:block">
              <Search className="w-6 h-6" />
            </button>
            <CartWidget />
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-fruit-950">
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

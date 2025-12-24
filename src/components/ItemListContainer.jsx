import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products.js";
import ItemList from "./ItemList";

export default function ItemListContainer({ text }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const asyncFunc = categoryId
      ? getProductsByCategory
      : getProducts;

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="w-full min-h-screen pt-24 pb-10 flex flex-col items-center p-4" aria-busy={loading}>
      <div className="bg-transparent p-8 rounded-lg max-w-6xl w-full text-center mx-4">
        <h1 className="text-3xl font-bold text-fruit-600 mb-4">
          {categoryId ? `Categoría: ${categoryId}` : "Bienvenido a nuestra tienda"}
        </h1>
        {text && !categoryId && <p className="text-lg text-fruit-400 italic mb-8">"{text}"</p>}

        {loading ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[1,2,3,4,5,6].map((i) => (
              <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse" aria-hidden>
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <ItemList products={products} /> 
        )}
      </div>
    </div>
  );
};
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="w-full min-h-screen pt-24 pb-10 flex justify-center bg-fruit-50 px-4">
        {loading ? (
          <div className="w-full max-w-5xl bg-transparent p-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row animate-pulse">
              <div className="md:w-1/2 h-72 md:h-[28rem] bg-gray-200" />
              <div className="md:w-1/2 p-6 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="h-10 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-11/12"></div>
                <div className="flex items-center justify-between mt-6">
                  <div className="h-8 bg-gray-200 rounded w-32"></div>
                  <div className="h-10 bg-gray-200 rounded w-40"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
             product ? <ItemDetail {...product} /> : <p>El producto no existe</p>
        )}
    </div>
  );
};
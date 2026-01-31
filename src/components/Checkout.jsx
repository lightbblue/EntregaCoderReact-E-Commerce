import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Checkout() {
    const { cart, total, clearCart } = useContext(CartContext);
    
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        confirmEmail: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email !== formData.confirmEmail) {
            alert("Los emails no coinciden");
            return;
        }

        setLoading(true);

        try {
            const order = {
                buyer: {
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email
                },
                items: cart.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const docRef = await addDoc(collection(db, "orders"), order);

            setOrderId(docRef.id);
            
            clearCart();

        } catch (error) {
            console.error("Error al crear la orden: ", error);
        } finally {
            setLoading(false);
        }
    };

    if (orderId) {
        return (
            <div className="pt-32 text-center max-w-2xl mx-auto px-4">
                <div className="bg-green-100 p-8 rounded-lg shadow-md border border-green-200">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">¡Gracias por tu compra!</h2>
                    <p className="text-gray-700 text-lg mb-6">Tu orden ha sido registrada con éxito.</p>
                    <div className="bg-white p-4 rounded border border-gray-200 inline-block mb-6">
                        <p className="text-sm text-gray-500">ID de seguimiento:</p>
                        <p className="text-2xl font-mono font-bold text-gray-800">{orderId}</p>
                    </div>
                    <div>
                        <Link to="/" className="bg-fruit-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-fruit-700">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
             <div className="flex flex-col justify-center items-center h-screen pt-20">
                 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-fruit-600 mb-4"></div>
                 <h2 className="text-xl font-bold text-gray-600">Procesando tu orden...</h2>
             </div>
        );
    }

    return (
        <div className="pt-24 max-w-lg mx-auto px-4 pb-12">
            <h2 className="text-3xl font-bold text-fruit-800 mb-8 text-center">Checkout</h2>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div>
                    <label className="block text-gray-700 font-bold mb-2">Nombre Completo</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fruit-500"
                        placeholder="Ej: Juan Pérez"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fruit-500"
                        placeholder="Ej: 11 1234 5678"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fruit-500"
                        placeholder="tu@email.com"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Confirmar Email</label>
                    <input 
                        type="email" 
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fruit-500"
                        placeholder="Repite tu email"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-fruit-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-fruit-700 transition-colors shadow-lg cursor-pointer"
                    disabled={cart.length === 0}
                >
                    Confirmar Compra
                </button>
            </form>
        </div>
    );
}
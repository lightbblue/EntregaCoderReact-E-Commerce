import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-fruit-100 min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer text="Todos nuestros productos" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1 className="pt-24 text-center text-2xl font-bold">404 - Página no encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
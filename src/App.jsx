import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  return (
    <div className="font-sans bg-fruit-100">
      <NavBar />
      <ItemListContainer text="Encuentra la mejor tecnología al mejor precio" />
    </div>
  );
}

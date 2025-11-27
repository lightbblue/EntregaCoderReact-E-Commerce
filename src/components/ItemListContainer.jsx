export default function ItemListContainer({ text }) {
  return (
    <div className="w-full min-h-screen pt-24 pb-10 flex flex-col items-center p-4">
      
      <div className="bg-transparent p-8 rounded-lg max-w-2xl w-full text-center mx-4">
        <h1 className="text-3xl font-bold text-fruit-600 mb-4">
          ¡Bienvenido a nuestra tienda!
        </h1>
    
        <p className="text-lg text-fruit-400 pl-4 italic">
          "{text}"
        </p>

        {/*Simulo productos */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-32 bg-fruit-300 rounded animate-pulse"></div>
          ))}
        </div>
      </div>

    </div>
  );
};
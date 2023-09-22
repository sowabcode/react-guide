import { useState } from "react";
// import Form from "./components/Form";
import Item from "./components/Item";

const App = () => {
  const [taches, setTaches] = useState([
    { id: 1, name: "Cours de react js" },
    { id: 2, name: "Aller au bureau" },
    { id: 3, name: "Faire du shopping" },
    { id: 4, name: "Faire du sport" },
    { id: 5, name: "Ménage" },
  ]);

  const [tache, setTache] = useState("");

  const handleChange = (e) => {
    setTache(e.target.value);
  };

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTache = {
      id: Math.random(6, 100),
      name: tache,
    };
    if (tache.length > 0) {
      setTaches([newTache, ...taches]);
    } else {
      setError("Saisissez le nom de la tache");
      return setTimeout(() => {
        setError("");
      }, 3000);
    }
    setTache("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="w-full bg-blue-400 text-white uppercase font-bold text-2xl text-center py-4">
        Premier pas avec React JS
      </h1>
      <div className="mt-14">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={tache}
              onChange={handleChange}
              placeholder="Ajouter le nom de la tache"
              className="border-2 rounded-md border-black w-96 p-3 font-semibold"
            />
            <button className="ml-6 border-2 border-blue-600 rounded-md bg-blue-400 text-white p-3">
              Ok
            </button>
          </form>
          <p className="text-red-400 h-4">{error}</p>
        </div>

        <div className="mt-8 px-4 py-2 max-h-[27rem] border-2 border-black rounded-lg overflow-y-auto">
          {taches.map((tache) => {
            return <Item key={tache.id} item={tache.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

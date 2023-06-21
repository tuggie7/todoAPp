import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const addOne = () => {
    setList([...list, name]);
    setName("");
    setCount(count + 1);
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">ToDo Listesi</h1>
        <div className="flex items-center">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg mr-2"
            type="text"
            placeholder="Yeni görev ekle"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
            onClick={addOne}
          >
            Ekle
          </button>
        </div>
      </div>
      <ul className="bg-white shadow-lg rounded-lg w-[400px]">
        {list.map((name, index) => (
          <li
            className="flex items-center justify-between px-4 py-2 border-b border-gray-300 last:border-b-0"
            key={index}
          >
            <span>{name}</span>
            <span className="text-gray-500">Görev {index + 1}</span>
          </li>
        ))}
      </ul>
      {list.length > 0 && (
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={clearList}
        >
          Tümünü Temizle
        </button>
      )}
    </div>
  );
}

export default App;

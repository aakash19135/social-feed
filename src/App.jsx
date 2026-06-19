import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trending from "./components/Trending";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded z-50"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-3">
          <Sidebar darkMode={darkMode} />
        </div>

        <div className="col-span-6">
          <Feed darkMode={darkMode} />
        </div>

        <div className="col-span-3">
          <Trending darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
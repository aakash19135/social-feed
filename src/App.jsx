import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trending from "./components/Trending";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"
      }`}
    >
      {/* Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-5 right-5 z-50 px-5 py-2 rounded-full shadow-lg font-medium transition-all ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-6">

        {/* Sidebar */}
        <div className="col-span-3">
          <Sidebar
            darkMode={darkMode}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Center */}
        <div className="col-span-6">
          {currentPage === "home" && (
            <Feed darkMode={darkMode} />
          )}

          {currentPage === "notifications" && (
            <Notifications darkMode={darkMode} />
          )}
        </div>

        {/* Right */}
        <div className="col-span-3">
          <Trending darkMode={darkMode} />
        </div>

      </div>
    </div>
  );
}

export default App;
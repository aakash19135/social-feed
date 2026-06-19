
export default function Trending({ darkMode }) {
  return (
    <div className={`p-4 border-l h-screen ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <h2 className="font-bold text-xl mb-4">
        Trending
      </h2>

      <ul className="space-y-3">
        <li>#react</li>
        <li>#javascript</li>
        <li>#mongodb</li>
        <li>#nodejs</li>
      </ul>
    </div>
  );
}
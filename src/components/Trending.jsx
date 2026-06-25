export default function Trending({ darkMode }) {
  const hashtags = [
    { tag: "#react", posts: "12.5K" },
    { tag: "#javascript", posts: "9.8K" },
    { tag: "#mongodb", posts: "7.6K" },
    { tag: "#nodejs", posts: "6.4K" },
    { tag: "#frontend", posts: "5.2K" },
  ];

  return (
    <div
      className={`rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-1">
        🔥 Trending
      </h2>

      <p
        className={`text-sm mb-5 ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Trending in Technology
      </p>

      {hashtags.map((item, index) => (
        <div
          key={index}
          className={`mb-3 rounded-xl p-3 cursor-pointer transition-all duration-300 hover:scale-105 ${
            darkMode
              ? "hover:bg-slate-700"
              : "hover:bg-gray-100"
          }`}
        >
          <p
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            #{index + 1} Trending
          </p>

          <p className="font-bold text-blue-500 text-lg">
            {item.tag}
          </p>

          <p
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {item.posts} Posts
          </p>
        </div>
      ))}
    </div>
  );
}
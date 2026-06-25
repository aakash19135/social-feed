export default function Bookmarks({ darkMode }) {
  const savedPosts = [
    {
      id: 1,
      user: "Rahul",
      text: "Learning React today! #react",
    },
    {
      id: 2,
      user: "Priya",
      text: "Building a social media app. #mongodb",
    },
    {
      id: 3,
      user: "Ananya",
      text: "Just posted my first blog!",
    },
  ];

  return (
    <div
      className={`rounded-2xl p-5 shadow-lg ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-2xl font-bold mb-5">
        📌 Bookmarks
      </h2>

      <div className="space-y-4">
        {savedPosts.map((post) => (
          <div
            key={post.id}
            className={`rounded-xl p-4 transition hover:scale-[1.02] ${
              darkMode
                ? "bg-slate-700"
                : "bg-gray-100"
            }`}
          >
            <h3 className="font-bold">
              {post.user}
            </h3>

            <p className="mt-2">
              {post.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
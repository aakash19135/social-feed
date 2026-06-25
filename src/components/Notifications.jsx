export default function Notifications({ darkMode }) {
  const notifications = [
    {
      id: 1,
      icon: "❤️",
      text: "Rahul liked your post.",
      time: "2 min ago",
    },
    {
      id: 2,
      icon: "💬",
      text: "Priya commented on your post.",
      time: "15 min ago",
    },
    {
      id: 3,
      icon: "👤",
      text: "Rohit started following you.",
      time: "1 hour ago",
    },
    {
      id: 4,
      icon: "📌",
      text: "Ananya bookmarked your post.",
      time: "3 hours ago",
    },
    {
      id: 5,
      icon: "🔥",
      text: "#react is trending now.",
      time: "Today",
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
        🔔 Notifications
      </h2>

      <div className="space-y-3">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`flex justify-between items-center p-3 rounded-xl transition hover:scale-[1.02] ${
              darkMode
                ? "bg-slate-700 hover:bg-slate-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>

              <div>
                <p>{item.text}</p>

                <p className="text-xs text-gray-400">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Sidebar({ darkMode }) {
  return (
    <div
      className={`rounded-xl p-4 shadow-lg ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Profile Card */}
      <div className="text-center border rounded-xl p-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-3">
          Aakash
        </h2>

        <p className="text-gray-500">
          Frontend Developer
        </p>

        <div className="flex justify-around mt-4">
          <div>
            <h3 className="font-bold">120</h3>
            <p>Posts</p>
          </div>

          <div>
            <h3 className="font-bold">450</h3>
            <p>Followers</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 space-y-4">
        <div className="cursor-pointer hover:text-blue-500">
          🏠 Home
        </div>

        <div className="cursor-pointer hover:text-blue-500">
          👤 Profile
        </div>

        <div className="cursor-pointer hover:text-blue-500">
          🔥 Trending
        </div>

        <div className="cursor-pointer hover:text-blue-500">
          🔔 Notifications
        </div>

        <div className="cursor-pointer hover:text-blue-500">
          📌 Bookmarks
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
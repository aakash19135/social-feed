import { useState } from "react";

export default function Sidebar({ 
  darkMode, setCurrentPage }) {
  return (
    <div
      className={`rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Profile Card */}
      <div
        className={`text-center rounded-2xl p-5 border ${
          darkMode
            ? "bg-slate-700 border-slate-600"
            : "bg-gray-50 border-gray-200"
        }`}
      >
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 shadow-lg hover:scale-105 transition"
        />

        {/* Online Status */}
        <div className="flex justify-center items-center mt-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="ml-2 text-sm text-green-500">
            Online
          </span>
        </div>

        <h2 className="text-2xl font-bold mt-3">
          Aakash
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-500"
          }
        >
          Frontend Developer
        </p>

        <div
          className={`flex justify-around mt-5 pt-4 border-t ${
            darkMode
              ? "border-slate-600"
              : "border-gray-300"
          }`}
        >
          <div>
            <h3 className="text-xl font-bold">
              120
            </h3>
            <p className="text-sm text-gray-400">
              Posts
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              450
            </h3>
            <p className="text-sm text-gray-400">
              Followers
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-7 space-y-3">

        <div 
        onClick={() => setCurrentPage("home")}
        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white cursor-pointer shadow">
          🏠 Home
        </div>

        <div 
        onClick={() => setCurrentPage("profile")}
        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
          👤 Profile
        </div>

        <div 
        onClick={() => setCurrentPage("trending")}
        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
          🔥 Trending
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
          🔔 Notifications
        </div>

        <div 
        onClick={() => setCurrentPage("bookmarks")}
        className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
          📌 Bookmarks
        </div>
      </div>
    </div>
  );
}
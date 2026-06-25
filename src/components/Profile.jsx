import { useState } from "react";

export default function Profile({ darkMode }) {
  const [name, setName] = useState("Aakash");
  const [bio, setBio] = useState(
    "Frontend Developer | React Developer | Open Source Learner"
  );

  const [avatar, setAvatar] = useState(
    "https://i.pravatar.cc/200?img=12"
  );

  const [editing, setEditing] = useState(false);

  return (
    <div
      className={`rounded-2xl shadow-xl p-6 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center">

        <img
          src={avatar}
          alt="profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500"
        />

        {editing && (
          <input
            type="text"
            placeholder="Image URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className={`mt-4 w-full p-3 rounded-xl border ${
              darkMode
                ? "bg-slate-700 border-slate-600"
                : "bg-gray-100 border-gray-300"
            }`}
          />
        )}

        {editing ? (
          <>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-5 w-full p-3 rounded-xl border ${
                darkMode
                  ? "bg-slate-700 border-slate-600"
                  : "bg-gray-100 border-gray-300"
              }`}
            />

            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className={`mt-3 w-full p-3 rounded-xl border resize-none ${
                darkMode
                  ? "bg-slate-700 border-slate-600"
                  : "bg-gray-100 border-gray-300"
              }`}
            />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mt-5">
              {name}
            </h2>

            <p className="mt-3 text-center text-gray-500">
              {bio}
            </p>
          </>
        )}

        <div className="grid grid-cols-3 gap-6 mt-8 text-center w-full">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              120
            </h2>
            <p>Posts</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              450
            </h2>
            <p>Followers</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              180
            </h2>
            <p>Following</p>
          </div>

        </div>

        <button
          onClick={() => setEditing(!editing)}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          {editing ? "Save Profile" : "Edit Profile"}
        </button>

      </div>
    </div>
  );
}
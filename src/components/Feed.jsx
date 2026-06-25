import { useState } from "react";
import PostCard from "./PostCard";

export default function Feed({ darkMode }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Aakash",
      text: "Hello Social Feed 🚀 #react #frontend",
      image: null,
      avatar: "https://i.pravatar.cc/150?img=1",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Rahul",
      text: "Learning React today! #react #javascript",
      image: null,
      avatar: "https://i.pravatar.cc/150?img=2",
      time: "3 hours ago",
    },
    {
      id: 3,
      user: "Priya",
      text: "Building a social media app. #react #mongodb",
      image: null,
      avatar: "https://i.pravatar.cc/150?img=3",
      time: "5 hours ago",
    },
    {
      id: 4,
      user: "Ananya",
      text: "Just posted my first blog! #javascript",
      image: null,
      avatar: "https://i.pravatar.cc/150?img=4",
      time: "1 day ago",
    },
    {
      id: 5,
      user: "Rohit",
      text: "Exploring new features. #nodejs #mongodb",
      image: null,
      avatar: "https://i.pravatar.cc/150?img=5",
      time: "2 days ago",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = () => {
    if (newPost.trim() === "") return;

    const post = {
      id: Date.now(),
      user: "Aakash",
      text: newPost,
      image: image,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      time: "Just now",
    };

    setPosts([post, ...posts]);
    setNewPost("");
    setImage(null);
  };

  return (
    <div className="p-4">

      {/* Search */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={`w-full border rounded-xl p-3 mb-3 outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-black"
        }`}
      />

      {/* Create Post */}
      <textarea
        rows="3"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="What's happening?"
        className={`w-full border rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-black"
        }`}
      />

      {/* Upload + Button */}
      <div className="flex items-center justify-between mt-3 flex-wrap gap-3">

        <label
          className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition border ${
            darkMode
              ? "bg-slate-700 border-slate-600 hover:bg-slate-600 text-white"
              : "bg-gray-100 border-gray-300 hover:bg-gray-200"
          }`}
        >
          📷
          <span className="text-sm font-medium">
            {image ? "Image Selected" : "Choose Image"}
          </span>

          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(URL.createObjectURL(file));
              }
            }}
          />
        </label>

        <button
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Post
        </button>
      </div>

      {/* Preview */}
      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-4 rounded-xl max-h-72 object-cover shadow-md"
        />
      )}

      {/* Posts */}
      <div className="mt-6 space-y-5">
        {posts
          .filter((post) =>
            post.text.toLowerCase().includes(search.toLowerCase())
          )
          .map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              user={post.user}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
              time={post.time}
              darkMode={darkMode}
              onDelete={() =>
                setPosts(posts.filter((p) => p.id !== post.id))
              }
            />
          ))}
      </div>
    </div>
  );
}
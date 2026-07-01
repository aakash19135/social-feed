import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import socket from "../socket/socket";
export default function Feed({ 
  darkMode,
   posts,
    setPosts,
    profile,
     onBookmark, 
     addNotification,
    totalLikes,
  setTotalLikes,
   totalComments,
  setTotalComments,
   totalBookmarks,
   setTotalBookmarks, }) {
  const [newPost, setNewPost] = useState("");
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(null);
  const[uploading, setUploading] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [loading, setLoading] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
   const MAX_CHARACTERS =280;
    const emojis = [
  "😀",
  "😂",
  "😍",
  "🥳",
  "😎",
  "🔥",
  "❤️",
  "👍",
  "👏",
  "💯",
  "🎉",
  "🚀",
];

  const handlePost = () => {
    if 
    (newPost.trim() === ""||
  newPost.length > MAX_CHARACTERS
  ) {
    return;
  }
    const post = {
      id: Date.now(),
      user:profile.name,
      text: newPost,
      image,
      avatar: profile.avatar,
      time: "Just now",
      edited: false,
    };

    setPosts([post, ...posts]);
    socket.emit("new-post", post);
    setNewPost("");
    setImage(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 150 &&
        !loading &&
        visiblePosts < posts.length
      ) {
        setLoading(true);

        setTimeout(() => {
          setVisiblePosts((prev) => prev + 3);
          setLoading(false);
        }, 800);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [loading, visiblePosts, posts]);
  useEffect(() => {
  socket.on("receive-post", (post) => {
    setPosts((prev) => [post, ...prev]);
  });

  return () => {
    socket.off("receive-post");
  };
}, []);

  return (
    <div className="p-4">

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

      <textarea
  rows="3"
  maxLength={MAX_CHARACTERS}
  value={newPost}
  onChange={(e) => setNewPost(e.target.value)}
  placeholder="What's happening?"
  className={`w-full border rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 ${
    darkMode
      ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
      : "bg-white border-gray-300 text-black"
  }`}
/>
<div className="flex justify-end mt-2">
  <span
    className={`text-sm ${
      newPost.length > 250
        ? "text-red-500 font-semibold"
        : darkMode
        ? "text-gray-400"
        : "text-gray-500"
    }`}
  >
    {newPost.length}/{MAX_CHARACTERS}
  </span>
</div>
<div className="mt-2 flex items-center gap-2 flex-wrap">
  <button
    onClick={() => setShowEmoji(!showEmoji)}
    className="px-3 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500"
  >
    😊 Emoji
  </button>

  {showEmoji && (
    <div
      className={`flex flex-wrap gap-2 p-3 rounded-lg ${
        darkMode ? "bg-slate-700" : "bg-gray-100"
      }`}
    >
      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => setNewPost((prev) => prev + emoji)}
          className="text-2xl hover:scale-125 transition"
        >
          {emoji}
        </button>
      ))}
    </div>
  )}
</div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:item-centre sm:justify-between mt-3 gap-3">
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
              if (!file) return;
              setUploading(true);
              
              setTimeout(() => {
                setImage(URL.createObjectURL(file));
                setUploading(false);
              },1500);
            }}
          />
        </label>

        <button
        disabled={uploading}
          onClick={handlePost}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          {uploading ? "Uploading..." : "Post"}
        </button>
      </div>
      {uploading &&(
  <div className="mt-3">
    <div className="w-full p-3 text-sm md:text-base h-2 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 animate-pulse w-2/3"></div>
    </div>

    <p className="text-sm mt-2 text-blue-500">
      Uploading image...
    </p>
  </div>
)}

{image && (
  <div className="mt-4">
    <img
      src={image}
      alt="Preview"
      className="w-full h-64 object-cover rounded-xl mt-3"
    />
  </div>
)}

      <div className="mt-6 space-y-5">
        {posts
          .filter((post) =>
            post.text.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, visiblePosts)
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
              onBookmark={() => onBookmark(post)}
              totalLikes={totalLikes}
               setTotalLikes={setTotalLikes}
                totalComments={totalComments}
                setTotalComments={setTotalComments}
                totalBookmarks={totalBookmarks}
               setTotalBookmarks={setTotalBookmarks}
              addNotification={(notification) => addNotification(notification)}
              onRepost={(newPost) => setPosts([newPost, ...posts])}
              onEdit={(updatedText) => {
                setPosts(
                  posts.map((p) =>
                    p.id === post.id
                     ? {
                         ...p,
                      text: updatedText,
                         edited: true,
                        }
                    : p
                     )
                        );
                        }}
                      edited={post.edited}
              onDelete={() =>
                setPosts(posts.filter((p) => p.id !== post.id))
              }
            />
          ))}
      </div>

      {loading && (
        <div className="flex flex-col items-center py-6">
          <div className="h-10 w-10 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          <p
            className={`mt-3 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Loading more posts...
          </p>
        </div>
      )}

      {!loading && visiblePosts < posts.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisiblePosts((prev) => prev + 3)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
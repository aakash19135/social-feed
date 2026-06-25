import { useState, useEffect } from "react";
import PostCard from "./PostCard";
export default function Feed({ 
  darkMode,
   posts,
    setPosts,
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
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [loading, setLoading] = useState(false);

  const handlePost = () => {
    if (newPost.trim() === "") return;

    const post = {
      id: Date.now(),
      user: "Aakash",
      text: newPost,
      image,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(
        Math.random() * 70
      )}`,
      time: "Just now",
    };

    setPosts([post, ...posts]);
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
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="What's happening?"
        className={`w-full border rounded-xl p-3 resize-none outline-none focus:ring-2 focus:ring-blue-500 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder-gray-400"
            : "bg-white border-gray-300 text-black"
        }`}
      />
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

      {image && (
        <img
          src={image}
          alt="Preview"
          className="mt-4 rounded-xl max-h-72 object-cover shadow-md"
        />
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
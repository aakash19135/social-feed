import { useState } from "react";

export default function PostCard({
  user,
  text,
  image,
  avatar,
  time,
  onDelete,
  darkMode,
  onBookmark,
  addNotification,
  onRepost,
  totalLikes,
  setTotalLikes,
  totalcomments,
  setTotalComments,
  totalBookmarks,
  setTotalBookmarks,
}) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);
  const[shared, setShared] = useState(false);
  const[quoted , setQuoted] = useState(false);
  const [quoteText, setQuoteText] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

 const addComment = () => {
  if (comment.trim() === "") return;

  setComments([...comments, comment]);
  setTotalComments((prev)=> prev + 1);

  if (addNotification) {
    addNotification({
      message: `💬 You commented on ${user}'s post`,
      time: "Just now",
    });
  }

  setComment("");
};

  return (
    <div
      className={`rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mt-5 ${
        darkMode
          ? "bg-slate-800 text-white border border-slate-700"
          : "bg-white text-black"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">

        <div className="flex gap-3 items-center">
          <img
            src={avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-bold text-lg">{user}</h3>

            <p className="text-sm text-gray-500">
              Frontend Developer
            </p>

            <p className="text-xs text-gray-400">
              {time}
            </p>
          </div>
        </div>

        {user !== "Aakash" && (
          <button
            onClick={() => {
  setIsFollowing(!isFollowing);

  addNotification &&
    addNotification({
      message: !isFollowing
        ? `➕ You followed ${user}`
        : `➖ You unfollowed ${user}`,
      time: "Just now",
    });
}}
            className={`px-4 py-1 rounded-lg text-white text-sm transition ${
              isFollowing
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        )}

      </div>

      {/* Text */}
      <p className="mt-4 leading-7">
        {text.split(" ").map((word, index) =>
          word.startsWith("#") ? (
            <span
              key={index}
              className="text-blue-500 font-semibold"
            >
              {word}{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </p>

      {/* Image */}
      {image && (
        <img
          src={image}
          alt="post"
          className="mt-4 rounded-xl w-full max-h-96 object-cover"
        />
      )}

      {/* Actions */}
      <div className="flex gap-6 mt-5 text-sm font-medium">

        <button
          onClick={() => {
  setLiked(!liked);

  if (!liked) {
    setTotalLikes((prev)=> prev + 1);
    setLikes(likes + 1);

    addNotification &&
      addNotification({
        message: `❤️ You liked ${user}'s post`,
        time: "Just now",
      });
  } else {
    setTotalLikes((prev)=> prev - 1);
    setLikes(likes - 1);
  }
}}
          className="hover:text-blue-500 transition"
        >
          {liked
            ? `❤️ Liked (${likes})`
            : `🤍 Like (${likes})`}
        </button>

        <button
          className="hover:text-blue-500 transition"
        >
          💬 Comment
        </button>

        <button
  onClick={() => {
    setSaved(!saved);

    if (!saved && onBookmark) {
      onBookmark({
        user,
        text,
        image,
        avatar,
        time,
      });
    }
  }}
>
  {saved ? "📌 Saved" : "📌 Save"}
</button>
        <button
  onClick={() => {
    navigator.clipboard.writeText(text);
    setShared(true);

    setTimeout(() => {
      setShared(false);
    }, 2000);
  }}
>
  {shared ? "✅ Shared" : "📤 Share"}
</button>

        <button
          onClick={onDelete}
          className="ml-auto text-red-500 hover:text-red-700 transition"
        >
          🗑 Delete
        </button>

      </div>
        {quoted && (
  <div className="mt-4">
    <textarea
      value={quoteText}
      onChange={(e) => setQuoteText(e.target.value)}
      placeholder="Write your thoughts..."
      className={`w-full p-3 rounded-lg border ${
        darkMode
          ? "bg-slate-700 border-slate-600 text-white"
          : "bg-white border-gray-300"
      }`}
    />

    <button
      onClick={() => {
        if (onRepost) {
          onRepost({
            user: "Aakash",
            text: `${quoteText}\n\n🔁 ${text}`,
            image,
            avatar,
            time: "Just now",
            reposted: true,
          });
        }

        setQuoted(false);
        setQuoteText("");

        if (addNotification) {
          addNotification({
            message: `💬 You quoted ${user}'s post`,
            time: "Just now",
          });
        }
      }}
      className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg"
    >
      Post Quote
    </button>
  </div>
)}
      {/* Comment Box */}
      <div className="mt-5">

        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          className={`w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300"
          }`}
        />

        <button
          onClick={addComment}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Add Comment
        </button>
        <button
  onClick={() => {
    if (onRepost) {
      onRepost({
        user: "Aakash",
        text,
        image,
        avatar,
        time: "Just now",
        reposted: true,
      });
    }

    if (addNotification) {
      addNotification({
        message: `🔁 You reposted ${user}'s post`,
        time: "Just now",
      });
    }
  }}
  className="hover:text-green-500 transition"
>
  🔁 Repost
</button>
<button
  onClick={() => setQuoted(!quoted)}
  className="hover:text-purple-500 transition"
>
  💬 Quote
</button>

        {comments.length > 0 && (
          <div className="mt-4 space-y-2">
            {comments.map((c, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-slate-700"
                    : "bg-gray-100"
                }`}
              >
                💬 {c}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trending from "./components/Trending";
import Notifications from "./components/Notifications";
import Bookmarks from "./components/Bookmarks";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const[ totalLikes, setTotalLikes] = useState(0);
  const[totalComments, setTotalComments]= useState(0);
  const[totalBookmarks, setTotalBookmarks]=useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const[notifications , setNotifications] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
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
  {
    id: 6,
    user: "Neha",
    text: "Working with #tailwind today.",
    image: null,
    avatar: "https://i.pravatar.cc/150?img=6",
    time: "3 days ago",
  },
  {
    id: 7,
    user: "Arjun",
    text: "Learning #nodejs and #express.",
    image: null,
    avatar: "https://i.pravatar.cc/150?img=7",
    time: "4 days ago",
  },
  {
    id: 8,
    user: "Sneha",
    text: "Started my #frontend journey.",
    image: null,
    avatar: "https://i.pravatar.cc/150?img=8",
    time: "5 days ago",
  },
  {
    id: 9,
    user: "Karan",
    text: "Exploring #mongodb database.",
    image: null,
    avatar: "https://i.pravatar.cc/150?img=9",
    time: "6 days ago",
  },
  {
    id: 10,
    user: "Meera",
    text: "Building with #react every day.",
    image: null,
    avatar: "https://i.pravatar.cc/150?img=10",
    time: "1 week ago",
  },
]);
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black"
      }`}
    >
      {/* Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-5 right-5 z-50 px-5 py-2 rounded-full shadow-lg font-medium transition-all ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-300"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 p-6">

        {/* Sidebar */}
        <div className="col-span-3">
          <Sidebar
            darkMode={darkMode}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Center */}
        <div className="col-span-6">
          {currentPage === "home" && (
           <Feed
  darkMode={darkMode}
  posts={posts}
  setPosts={setPosts}
  onBookmark={(post)=> 
    setBookmarks((prev)=> [...prev,post])
  }
  addNotification={(notification)=>
    setNotifications((prev)=>
    [notification, ...prev])
  }
  totalLikes={totalLikes}
  setTotalLikes={setTotalLikes}
  totalComments={totalComments}
  setTotalComments={setTotalComments}
  totalBookmarks={totalBookmarks}
  setTotalBookmarks={setTotalBookmarks}
/>
          )}
          {currentPage === "trending" && (
            <Trending
            darkMode={darkMode}
            posts={posts}
            />
          )}

          {currentPage === "notifications" && (
            <Notifications darkMode={darkMode} 
            notifications={notifications}
             />
          )}

          {currentPage === "bookmarks" && (
            <Bookmarks darkMode={darkMode} bookmarks={bookmarks} />
          )}

          {currentPage === "profile" && (
            <Profile darkMode={darkMode} />
          )}
          {currentPage === "dashboard" && (
  <Dashboard
    darkMode={darkMode}
    posts={posts}
    totalLikes={totalLikes}
    totalComments={totalComments}
    totalBookmarks={totalBookmarks}
  />
)}
        </div>

        {/* Right */}
        <div className="col-span-3">
          <Trending darkMode={darkMode}
          posts={posts} />
        </div>

      </div>
    </div>
  );
}

export default App;
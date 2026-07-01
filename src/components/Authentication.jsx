import { useNavigate} from "react-router-dom";
import { useState } from "react";
export default function Auth({ darkMode, onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all required fields");
      return;
    }

    if (!isLogin && !name) {
      alert("Please enter your name");
      return;
    }

    onLogin({
      name: name || "Aakash",
      email,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        darkMode ? "bg-slate-900" : "bg-gray-100"
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-[380px] p-8 rounded-2xl shadow-xl ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white"
        }`}
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h1>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <div className="flex justify-between items-center mb-5">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember Me
          </label>

          <button
            type="button"
            className="text-blue-600"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center mt-5">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 font-semibold"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}
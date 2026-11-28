"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const VALID_USERNAME = "jemuel";
  const VALID_PASSWORD = "123";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError("Please fill in both username and password.");
      return;
    }

    if (username !== VALID_USERNAME) {
      setError("Wrong username.");
      return;
    }

    if (password !== VALID_PASSWORD) {
      setError("Wrong password.");
      return;
    }

    setError("");
    router.push("/profile");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-sm bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-slate-400 mt-2">
            Please login to your account
          </p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-3 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 bg-slate-900 text-white placeholder-slate-500 border border-slate-700 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
            />
          </div>

          {/* Show Password */}
          <div className="flex items-center mb-5">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="mr-2 accent-indigo-600 cursor-pointer"
            />

            <label
              htmlFor="showPassword"
              className="text-sm text-slate-300 cursor-pointer"
            >
              Show Password
            </label>
          </div>

          {/* Error Message */}
          {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-500 transition duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-slate-500 mt-7">
          © 2026 Your Application. All rights reserved.
        </p>
      </div>
    </div>
  );
}

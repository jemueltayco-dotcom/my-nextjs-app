"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 max-w-sm w-full text-center">
        <h1 className="text-xl font-bold text-white mb-6">User Profile</h1>

        <img
          src="/slardar.jpg"
          alt="Profile Picture"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-slate-700 shadow-md"
        />

        <p className="text-slate-300 mb-6">
          Welcome, <span className="font-semibold text-white">slardar</span>!
        </p>

        <button
          onClick={() => router.back()}
          className="w-full py-2.5 px-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-500 transition-colors cursor-pointer"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

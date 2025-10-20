import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-blue-50 to-gray-100 rounded-xl shadow-lg mx-4 mt-12 p-8">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-700 drop-shadow">Welcome to Technician Hire</h1>
      <p className="mb-8 text-xl text-gray-700 max-w-xl text-center">Find and hire skilled technicians for your needs. Fast, reliable, and easy to use.</p>
      <a href="/technicians" className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all font-semibold text-lg">Browse Technicians</a>
    </div>
  );
}

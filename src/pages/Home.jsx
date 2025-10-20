import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Technician Hire</h1>
      <p className="mb-8 text-lg text-gray-700">Find and hire skilled technicians for your needs.</p>
      <a href="/technicians" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Browse Technicians</a>
    </div>
  );
}

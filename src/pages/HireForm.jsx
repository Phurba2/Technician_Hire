import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function HireForm() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", contact: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-md mx-auto py-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-green-700">Request Submitted!</h2>
          <p className="mb-6 text-gray-700">Thank you for your request. The technician will contact you soon.</p>
          <Link to="/technicians" className="text-blue-600 hover:underline">Back to Technicians</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-16">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Hire Technician</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            placeholder="Your Name"
            required
          />
          <input
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            placeholder="Contact Info"
            required
          />
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg min-h-[100px]"
            placeholder="Describe your request"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all font-semibold text-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

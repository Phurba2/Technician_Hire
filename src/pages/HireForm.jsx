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
      <div className="max-w-md mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Request Submitted!</h2>
        <p className="mb-6">Thank you for your request. The technician will contact you soon.</p>
        <Link to="/technicians" className="text-blue-600 hover:underline">Back to Technicians</Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Hire Technician</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Your Name"
          required
        />
        <input
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Contact Info"
          required
        />
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          placeholder="Describe your request"
          required
        />
        <button type="submit" className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Submit Request
        </button>
      </form>
      <div className="mt-6">
        <Link to="/technicians" className="text-blue-600 hover:underline">Back to Technicians</Link>
      </div>
    </div>
  );
}

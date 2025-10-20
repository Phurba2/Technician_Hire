import React from "react";
import { useParams, Link } from "react-router-dom";

const technicians = [
  { id: 1, name: "Alice Smith", skill: "Electrician", location: "New York", bio: "Experienced electrician with 10+ years in residential and commercial projects." },
  { id: 2, name: "Bob Johnson", skill: "Plumber", location: "Los Angeles", bio: "Certified plumber specializing in repairs and installations." },
  { id: 3, name: "Charlie Lee", skill: "Carpenter", location: "Chicago", bio: "Skilled carpenter for custom furniture and renovations." },
];

export default function TechnicianDetails() {
  const { id } = useParams();
  const tech = technicians.find((t) => t.id === Number(id));
  if (!tech)
    return (
      <div className="p-8 text-center text-red-600 font-semibold">Technician not found.</div>
    );
  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-4xl font-bold mb-2 text-blue-700">{tech.name}</h2>
        <div className="mb-2 text-lg text-gray-700">{tech.skill} - {tech.location}</div>
        <div className="mb-6 text-gray-600">{tech.bio}</div>
        <Link
          to={`/hire/${tech.id}`}
          className="inline-block px-8 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 hover:scale-105 transition-all font-semibold text-lg"
        >
          Hire {tech.name}
        </Link>
        <div className="mt-8">
          <Link to="/technicians" className="text-blue-600 hover:underline">Back to list</Link>
        </div>
      </div>
    </div>
  );
}

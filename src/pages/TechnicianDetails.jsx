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
  if (!tech) return <div className="p-8">Technician not found.</div>;
  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">{tech.name}</h2>
      <div className="mb-2 text-lg">{tech.skill} - {tech.location}</div>
      <div className="mb-6 text-gray-700">{tech.bio}</div>
      <Link to={`/hire/${tech.id}`} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Hire {tech.name}</Link>
      <div className="mt-6">
        <Link to="/technicians" className="text-blue-600 hover:underline">Back to list</Link>
      </div>
    </div>
  );
}

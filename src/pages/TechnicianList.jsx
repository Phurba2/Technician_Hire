import React from "react";

const technicians = [
  { id: 1, name: "Alice Smith", skill: "Electrician", location: "New York" },
  { id: 2, name: "Bob Johnson", skill: "Plumber", location: "Los Angeles" },
  { id: 3, name: "Charlie Lee", skill: "Carpenter", location: "Chicago" },
];

export default function TechnicianList() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Available Technicians</h2>
      <ul className="space-y-4">
        {technicians.map((tech) => (
          <li key={tech.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-semibold text-lg">{tech.name}</div>
              <div className="text-gray-600">{tech.skill} - {tech.location}</div>
            </div>
            <a href={`/technicians/${tech.id}`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

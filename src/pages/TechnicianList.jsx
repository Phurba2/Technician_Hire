import React from "react";

const technicians = [
  { id: 1, name: "Alice Smith", skill: "Electrician", location: "New York" },
  { id: 2, name: "Bob Johnson", skill: "Plumber", location: "Los Angeles" },
  { id: 3, name: "Charlie Lee", skill: "Carpenter", location: "Chicago" },
];

export default function TechnicianList() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-8 text-blue-700 text-center">Available Technicians</h2>
      <ul className="grid gap-6 md:grid-cols-2">
        {technicians.map((tech) => (
          <li
            key={tech.id}
            className="p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="mb-4 md:mb-0">
              <div className="font-semibold text-xl text-gray-800">{tech.name}</div>
              <div className="text-gray-600">{tech.skill} - {tech.location}</div>
            </div>
            <a
              href={`/technicians/${tech.id}`}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-all font-medium"
            >
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

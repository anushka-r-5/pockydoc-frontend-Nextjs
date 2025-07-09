"use client";

import { useEffect, useState } from "react";

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("submittedDoctors") || "[]");
    setDoctors(stored);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctors List</h2>
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <ul className="space-y-2">
          {doctors.map((doc: any, index: number) => (
            <li key={index} className="p-4 bg-white shadow border rounded">
              <strong>{doc.name}</strong> ({doc.email}) - {doc.city}, {doc.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
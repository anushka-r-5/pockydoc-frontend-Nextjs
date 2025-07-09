"use client";

import { useEffect, useState } from "react";

export default function DoctorDashboard() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("submittedDoctors") || "[]");
    setDoctors(stored);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctor Dashboard</h2>
      {doctors.length === 0 ? (
        <p>No submitted doctors yet.</p>
      ) : (
        <ul className="space-y-2">
          {doctors.map((doc: any, index: number) => (
            <li key={index} className="p-4 bg-blue-50 shadow border rounded">
              <strong>{doc.name}</strong> – {doc.contactno} – {doc.city}, {doc.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
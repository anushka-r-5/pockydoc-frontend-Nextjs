"use client";

import { useEffect, useState } from "react";

export default function DoctorsList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("submittedDoctors") || "[]");
    setDoctors(stored);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Doctors List</h1>
      {doctors.length === 0 ? (
        <p>No doctors available.</p>
      ) : (
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">City</th>
              <th className="p-3">State</th>
              <th className="p-3">Country</th>
              <th className="p-3">Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <tr key={index} className="border-t">
                <td className="p-3 font-medium">{doc.name}</td>
                <td className="p-3">{doc.email}</td>
                <td className="p-3">{doc.city}</td>
                <td className="p-3">{doc.state}</td>
                <td className="p-3">{doc.country}</td>
                <td className="p-3">{doc.postalcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";

export default function DoctorOnboarding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    city: "",
    state: "",
    country: "",
    postalcode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("submittedDoctors") || "[]");
    existing.push(formData);
    localStorage.setItem("submittedDoctors", JSON.stringify(existing));
    alert("Doctor onboarded successfully!");
    setFormData({
      name: "",
      email: "",
      contactno: "",
      city: "",
      state: "",
      country: "",
      postalcode: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Doctor Onboarding Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "contactno", "city", "state", "country", "postalcode"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={(formData as any)[field]}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Doctor Info
        </button>
      </form>
    </div>
  );
}
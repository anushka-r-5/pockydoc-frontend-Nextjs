"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactno: "",
    country: "",
    city: "",
    state: "",
    postalcode: "",
    status: "pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("submittedDoctors") || "[]");
    const updated = [...existing, formData];
    localStorage.setItem("submittedDoctors", JSON.stringify(updated));
    alert("Doctor submitted successfully!");
    router.push("/doctor/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md mt-6 space-y-4">
      <h2 className="text-xl font-bold">Doctor Sign-Up</h2>
      {["name", "email", "contactno", "country", "city", "state", "postalcode"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
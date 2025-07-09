"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
        Welcome to PockyDoc
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
        Streamlining Doctor Onboarding Seamlessly
      </p>

      <img
        src="https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=400&auto=format&fit=crop&q=60"
        alt="Smiling Doctor"
        className="w-64 h-64 object-cover rounded-xl shadow-lg mb-10"
      />

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={() => router.push("/onboarding")}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-medium"
        >
          Doctor Onboarding
        </button>
        <button
          onClick={() => router.push("/doctor/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium"
        >
          Doctor Dashboard
        </button>
        
         
      </div>
    </div>
  );
}
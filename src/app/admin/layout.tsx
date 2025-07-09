
import React from "react";
import "../globals.css"; // Tailwind directives already here

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#f9f9f9] text-black">
      {/* Sidebar (Pane 1 - Icons Only) */}
      <aside className="w-16 bg-blue-600 text-white flex flex-col items-center py-4 space-y-6 shadow-md">
        <div className="text-xl font-bold">🩺</div>
        <div title="Onboarding">📥</div>
        <div title="Doctors">👨‍⚕️</div>
        <div title="Users">👤</div>
        <div title="Payments">💳</div>
        <div title="Settings">⚙️</div>
      </aside>

      {/* Middle Pane (Placeholder for navigation/filters) */}
      <section className="w-60 bg-blue-100 border-r border-blue-300 p-4">
        <h2 className="text-lg font-semibold mb-4">Admin Menu</h2>
        <ul className="space-y-2">
          <li className="hover:underline cursor-pointer">Doctor Onboarding</li>
          <li className="hover:underline cursor-pointer">Doctor Management</li>
          <li className="hover:underline cursor-pointer">Appointments</li>
          <li className="hover:underline cursor-pointer">Payments</li>
        </ul>
      </section>

      {/* Main Content Area (Pane 3) */}
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
"use client";

import { useRouter } from "next/navigation";
import { FaUserPlus, FaUserMd, FaCalendarAlt, FaMoneyBill } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  const menu = [
    { label: "Doctor Onboarding", icon: <FaUserPlus />, path: "/onboarding" },
    { label: "Doctor Management", icon: <FaUserMd />, path: "/admin/doctors" },
    { label: "Appointments", icon: <FaCalendarAlt />, path: "/admin/appointments" },
    { label: "Payments", icon: <FaMoneyBill />, path: "/admin/payments" },
  ];

  return (
    <div className="bg-blue-800 text-white w-64 h-screen flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Menu</h2>
      <ul className="space-y-4">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => router.push(item.path)}
            className="flex items-center gap-3 cursor-pointer hover:bg-blue-700 p-2 rounded"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
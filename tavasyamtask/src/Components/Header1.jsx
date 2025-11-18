import React from "react";

export default function Header1() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <p className="text-sm text-gray-500">Good Morning</p>
        <h1 className="text-2xl font-semibold">Welcome Back!</h1>
      </div>

      <input
        type="text"
        placeholder="Search"
        className="border rounded-full px-4 py-2 w-72 shadow-sm focus:outline-none"
      />
    </header>
  );
}

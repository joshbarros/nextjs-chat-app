"use client";

import Navbar from './_components_/navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Simple Chat Application. All rights reserved.</p>
          <p className="text-sm">
            Built with <span className="text-red-500">&hearts;</span> by Josue Barros
          </p>
        </div>
      </footer>
    </div>
  );
}

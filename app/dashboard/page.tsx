"use client";

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 dark:text-white">Welcome to Your Dashboard</h1>

      {/* Links to various sections */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 sm:p-8 rounded shadow-md hover:from-blue-600 hover:to-blue-800 cursor-pointer h-44"
          onClick={() => handleNavigate('/dashboard/instructions')}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Instructions</h2>
          <p>Learn how the app works</p>
        </div>

        <div
          className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 sm:p-8 rounded shadow-md hover:from-purple-600 hover:to-purple-800 cursor-pointer h-44"
          onClick={() => handleNavigate('/dashboard/rooms')}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Chat Rooms</h2>
          <p>Join and engage in chat rooms.</p>
        </div>

        <div
          className="bg-gradient-to-r from-orange-500 to-orange-700 text-white p-6 sm:p-8 rounded shadow-md hover:from-orange-600 hover:to-orange-800 cursor-pointer h-44"
          onClick={() => handleNavigate('/dashboard/roadmap')}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Roadmap</h2>
          <p>Stay tuned for next features!</p>
        </div>
      </div>

      {/* Quick stats or important info */}
      <div className="mt-8 sm:mt-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">Quick Stats</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-6 sm:p-8 rounded shadow-md h-44">
            <h4 className="text-lg sm:text-xl font-bold">Active Users</h4>
            <p>66 Active Users</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-6 sm:p-8 rounded shadow-md h-44">
            <h4 className="text-lg sm:text-xl font-bold">Existing Rooms</h4>
            <p>299 Rooms</p>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 sm:p-8 rounded shadow-md h-44">
            <h4 className="text-lg sm:text-xl font-bold">Trending Topics</h4>
            <p>US Elections 2024</p>
            <p>NASDAQ Updates</p>
            <p>Apple Developer Conference 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

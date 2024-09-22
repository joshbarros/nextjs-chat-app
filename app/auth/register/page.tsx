"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../_components_/shadcn/input';
import { Button } from '../../_components_/shadcn/button';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Registration failed');
      } else {
        router.push('/auth/login'); // Redirect to login page after successful registration
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 dark:bg-gray-900">
      <form onSubmit={handleRegister} className="bg-transparent border border-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 text-white bg-transparent focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 text-white bg-transparent focus:ring focus:ring-blue-500"
          />
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 text-white bg-transparent focus:ring focus:ring-blue-500"
          />
        </div>

        <Button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
          Register
        </Button>

        <p className="text-center text-white">
          Already have an account? <a href="/auth/login" className="text-blue-500 underline">Login</a>
        </p>
      </form>
    </div>
  );
}

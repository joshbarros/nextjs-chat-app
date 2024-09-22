"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../../_components_/shadcn/input';
import { Button } from '../../_components_/shadcn/button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const token = document.cookie.split('; ').find((row) => row.startsWith('token='));
    if (token) {
      // Redirect to dashboard if the user is already logged in
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Login failed');
      } else {
        const data = await res.json();
        const token = data.token; // Assuming token is returned in response

        // Save the token in cookies (with an expiration)
        document.cookie = `token=${token}; path=/; max-age=604800;`; // Set cookie for 1 week

        // After successfully setting the token, push to the dashboard
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black p-4">
      <form onSubmit={handleLogin} className="bg-transparent border border-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-500 text-white bg-transparent focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-500 text-white bg-transparent focus:ring focus:ring-blue-500"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
          Login
        </Button>
        <p className="text-center text-white">
          Don’t have an account? <a href="/auth/register" className="text-blue-500 underline">Register</a>
        </p>
      </form>
    </div>
  );
}

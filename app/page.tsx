"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

const HomePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          router.push("/dashboard");
        } else {
          router.push("/auth/login");
        }
      } catch (error) {
        console.error("Error during authentication check", error);
        router.push("/auth/login"); // Fallback to login page on error
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {loading && (
        <div className="text-center text-white">
          <Loader className="animate-spin h-16 w-16 mb-4" />
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;

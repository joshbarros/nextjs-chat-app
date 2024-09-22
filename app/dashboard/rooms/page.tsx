"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Input } from "@/app/_components_/shadcn/input";
import { Button } from "@/app/_components_/shadcn/button";

// Define the Room type
interface Room {
  id: string;
  room_name: string;
  created_at: string;
}

const RoomsPage = () => {
  const [rooms, setRooms] = useState<Room[]>([]); // Type the rooms state
  const [newRoom, setNewRoom] = useState<string>(""); // Type the newRoom state as string

  // Helper function to get the token from cookies
  const getToken = (): string => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    return token || "";
  };

  // Fetch updated rooms list, now wrapped in `useCallback` to prevent recreation on each render
  const fetchRooms = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:8080/rooms", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const data: Room[] = await res.json(); // Ensure the fetched data is of type Room[]
      setRooms(data); // Update the room list
    } catch (err) {
      console.error("Failed to load rooms", err);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newRoom.trim() === "") return;

    try {
      const res = await fetch("http://localhost:8080/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ room_name: newRoom }),
      });

      if (res.ok) {
        const data: Room = await res.json(); // Ensure the created room is of type Room
        setNewRoom(""); // Clear input field
        setRooms((prevRooms) => [...prevRooms, data]); // Update the room list
        fetchRooms(); // Fetch the updated list of rooms
      } else {
        console.error("Failed to create room");
      }
    } catch (err) {
      console.error("Error creating room", err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chat Rooms</h1>

      <form onSubmit={handleCreateRoom} className="mb-4">
        <Input
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
          placeholder="Enter room name"
          className="mr-2"
        />
        <Button type="submit">Create Room</Button>
      </form>

      {rooms.length > 0 ? (
        <div className="space-y-4">
          {rooms.map((room) => (
            <div key={room.id} className="flex justify-between items-center bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-semibold">Room: {room.room_name}</h2>
              <Link href={`/dashboard/rooms/${room.id}`}>
                <Button>Join Room</Button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No rooms available.</p>
      )}
    </div>
  );
};

export default RoomsPage;

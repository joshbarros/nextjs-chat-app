"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Input } from "@/app/_components_/shadcn/input";
import { Button } from "@/app/_components_/shadcn/button";

export default function ChatRoom() {
  const { id } = useParams(); // Dynamic room ID
  const [messages, setMessages] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const ws = useRef<WebSocket | null>(null); // Store WebSocket connection

  const getToken = () => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    return token || "";
  };

  // Fetch the last 100 messages when the room is selected
  useEffect(() => {
    if (!id) return;

    const fetchMessages = async () => {
      try {
        const token = getToken();
        const response = await fetch(`http://localhost:8080/rooms/${id}/messages`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMessages(data.map((msg: { message: string }) => msg.message));
        } else {
          console.error("Failed to fetch messages");
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [id]);

  // Setup WebSocket connection
  useEffect(() => {
    if (!id) return;

    const token = getToken();
    ws.current = new WebSocket(`ws://localhost:8080/ws/${id}`);

    ws.current.onopen = () => {
      ws.current?.send(JSON.stringify({ type: "auth", token })); // Send token after connection is established
    };

    ws.current.onmessage = (message) => {
      if (typeof message.data === "string") {
        setMessages((prevMessages) => [...prevMessages, message.data]);
      }
    };

    return () => {
      if (ws.current) ws.current.close();
    };
  }, [id]);

  // Send message to WebSocket
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (ws.current && messageInput) {
      ws.current.send(messageInput); // Send message through WebSocket
      setMessageInput(""); // Clear input
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4 p-4">Chat Room: {id}</h1>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-700">
        {messages.map((msg, index) => (
          <div key={index} className="bg-gray-500 p-4 shadow rounded-lg">
            {msg}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-4 bg-gray-500 flex items-center">
        <Input
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="flex-grow"
          placeholder="Type your message..."
        />
        <Button type="submit" className="ml-4">
          Send
        </Button>
      </form>
    </div>
  );
}

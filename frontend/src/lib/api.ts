// lib/api.ts
// API helper functions for fetching/sending chat data.

import { Message } from "@/types/chat";

export async function fetchMessages(conversationId: string): Promise<Message[]> {
  // Example: Replace with real API call
  return [
    { id: "1", sender: "bot", text: "Hello 👋", timestamp: new Date().toISOString() },
  ];
}

export async function sendMessage(conversationId: string, text: string): Promise<Message> {
  // Example: Replace with real API call
  return { id: "2", sender: "user", text, timestamp: new Date().toISOString() };
}

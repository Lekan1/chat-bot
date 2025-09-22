// types/chat.ts
// TypeScript type definitions for chat-related data structures.

// Sender type — only "bot" or "user" are valid values.
export type Sender = "bot" | "user";

// Message type — represents a single chat message.
export interface Message {
  id: string;        // Unique message ID
  sender: Sender;    // Who sent the message
  text: string;      // Message content
  timestamp: string; // ISO date string
}

// Conversation type — represents a chat thread.
export interface Conversation {
  id: string;         // Unique conversation ID
  title: string;      // Conversation title (e.g., "Conversation 1")
  preview: string;    // Short preview of the last message
  lastUpdated: string;// ISO date string of last activity
}

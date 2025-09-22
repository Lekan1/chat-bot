// hooks/useChat.ts
// Manages chat state and message sending.

import { useState } from "react";

export function useChat() {
  const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  const sendMessage = (text: string) => {
    setMessages((prev) => [...prev, { sender: "user", text }]);
    // TODO: Call API and append bot response
  };

  return { messages, sendMessage };
}

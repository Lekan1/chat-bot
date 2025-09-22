import { Conversation, Message } from "@/types";

export const mockConversations: Conversation[] = [
  { id: "", title: " ", preview: " ", lastUpdated: new Date().toISOString() },
  { id: "", title: " ", preview: "", lastUpdated: new Date().toISOString() },
];

export const mockMessages: Message[] = [
  { id: "", sender: "bot", text: "", timestamp: new Date().toISOString() },
  { id: "", sender: "user", text: "", timestamp: new Date().toISOString() },
  { id: "", sender: "bot", text: "", timestamp: new Date().toISOString() },
];

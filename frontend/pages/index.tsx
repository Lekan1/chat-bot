import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Conversation {
  id: number;
  createdAt: string;
}

export default function Home() {
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    api.get("/conversations")
      .then(res => setConversations(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Conversations</h1>
      <ul>
        {conversations.map(conv => (
          <li key={conv.id} className="p-2 border rounded mb-2">
            Conversation #{conv.id} - {new Date(conv.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

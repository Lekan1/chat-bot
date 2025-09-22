// components/chat/MessageList.tsx
// Scrollable container for messages.

import MessageBubble from "./MessageBubble";
import { Message } from "@/types";

type Props = {
  messages: Message[];
};

export default function MessageList({ messages }: Props) {
  return (
    <div className="flex flex-col gap-[8px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <MessageBubble text={msg.text} sender={msg.sender} />
          </div>
        ))}
      </div>
  );
}

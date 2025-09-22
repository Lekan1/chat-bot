// layouts/MobileLayout.tsx
// Mobile-first layout that toggles between conversation list and chat view.

import { useState } from "react";
import ChatHeader from "@/components/chat/ChatHeader";
import ConversationList from "@/components/chat/ConversationList";
import MessageList from "@/components/chat/MessageList";
import ChatInputBar from "@/components/chat/ChatInputBar";
import TypingIndicator from "@/components/chat/TypingIndicator";
import { Conversation, Message } from "@/types";

type MobileLayoutProps = {
  conversations: Conversation[];
  messages: Message[];
  activeConversationId?: string;
};

export default function MobileLayout({
  conversations,
  messages,
  activeConversationId,
}: MobileLayoutProps) {
  // "list" = show conversation list, "chat" = show chat view
  const [view, setView] = useState<"list" | "chat">("list");

  return (
    <div className="flex flex-col h-screen bg-surface">
      {view === "list" && (
        <>
          <ChatHeader
            title="Conversations"
            roleLabel=""
            // No menu button here
          />
          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelectConversation={(id) => {
              console.log("Selected:", id);
              setView("chat");
            }}
          />
        </>
      )}

      {view === "chat" && (
        <>
          <ChatHeader
            onMenuClick={() => setView("list")} // back to list
          />
          <MessageList messages={messages} />
          <TypingIndicator />
          <ChatInputBar />
        </>
      )}
    </div>
  );
}

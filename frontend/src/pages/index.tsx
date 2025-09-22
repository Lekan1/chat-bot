// src/pages/index.tsx
import Sidebar from "@/components/layout/Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import TypingIndicator from "@/components/chat/TypingIndicator";
import ChatInputBar from "@/components/chat/ChatInputBar";
import { mockMessages } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Full-width header */}
      <ChatHeader />

      {/* Main content: sidebar + chat pane */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat pane */}
        <main className="flex flex-col flex-1 bg-surface">
          {/* Conversation tag row */}
          <div className="flex items-center gap-[8px] px-[24px] py-[16px] border-b border-gray-200">
            <span className="inline-flex items-center justify-center w-[20px] h-[20px] rounded-full bg-primary text-white text-[14px] leading-none">
              💬
            </span>
            <span className="text-[14px] font-medium text-inkMuted">
              Conversation
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-[24px] py-[16px]">
            <MessageList messages={mockMessages || []} />
          </div>

          {/* Typing indicator */}
          <TypingIndicator />

          {/* Input bar */}
          <div className="px-[24px] py-[16px] border-t border-gray-200 bg-white">
            <ChatInputBar />
          </div>
        </main>
      </div>
    </div>
  );
}

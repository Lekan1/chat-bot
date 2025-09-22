// layouts/AppLayout.tsx
import ConversationList from "@/components/chat/ConversationList";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageList from "@/components/chat/MessageList";
import TypingIndicator from "@/components/chat/TypingIndicator";
import ChatInputBar from "@/components/chat/ChatInputBar";
import { Conversation, Message } from "@/types";

type Props = {
  conversations: Conversation[];
  messages: Message[];
  activeConversationId?: string;
};

export default function AppLayout({
  conversations,
  messages,
  activeConversationId,
}: Props) {
  return (
    <div className="w-[1440px] h-[818px] bg-surface mx-auto flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-[280px] border-r border-gray-200 bg-white">
        <ConversationList
          conversations={conversations}
          activeConversationId={activeConversationId}
          onSelectConversation={(id) => console.log("Selected:", id)}
        />
      </aside>

      {/* Chat pane */}
      <main className="flex flex-col flex-1 bg-[#FEF7FF]">
        <MessageList messages={messages} />
        <TypingIndicator />
        <ChatInputBar />
      </main>
    </div>
  );
}

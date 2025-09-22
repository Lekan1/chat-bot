// components/chat/ConversationList.tsx
// Sidebar list of conversations with preview text and timestamps.
// Matches Figma's conversation list design.

import { Conversation } from "@/types";

type ConversationListProps = {
  conversations: Conversation[];
  activeConversationId?: string;
  onSelectConversation: (id: string) => void;
};

export default function ConversationList({
  conversations,
  activeConversationId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      {conversations.length === 0 && (
        <div className="p-4 text-sm text-inkMuted">No conversations yet</div>
      )}
      {conversations.map((c) => {
        const isActive = c.id === activeConversationId;
        return (
          <button
            key={c.id}
            onClick={() => onSelectConversation(c.id)}
            className={`w-full text-left px-4 py-3 border-b border-gray-100 transition-colors ${
              isActive ? "bg-blue-50" : "hover:bg-gray-50"
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium text-[14px] text-ink truncate">{c.title}</span>
              <span className="text-[13px] text-inkMuted truncate">{c.preview}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

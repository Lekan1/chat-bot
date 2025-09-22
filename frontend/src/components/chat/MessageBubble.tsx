// components/chat/MessageBubble.tsx
// Single message bubble, styled differently for user vs bot.

import clsx from "clsx";

type Props = {
  text: string;
  sender: "bot" | "user";
};

export default function MessageBubble({ text, sender }: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={clsx(
        "max-w-bubble p-[12px] leading-relaxed transition-shadow hover:shadow-card",
        isUser
          ? "bg-userBubble text-white ml-auto rounded-tr-[4px] rounded-tl-lg rounded-bl-lg rounded-br-lg"
          : "bg-botBubble text-ink mr-auto rounded-tl-[4px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
      )}
    >
      {text}
    </div>
  );
}


// src/components/layout/Sidebar.tsx
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-[320px] h-full border-r border-gray-200 bg-white flex flex-col">
      {/* "+ Conversations" button */}
      <button className="h-[64px] flex items-center justify-center gap-[6px] text-inkMuted font-medium border-b border-gray-200 hover:bg-grayLight transition-colors">
        {/* Plus icon from Figma's icon set */}
        <Image
          src="/icons/plus.svg" // export the actual plus icon from Figma to public/icons
          alt="Add conversation"
          width={20}
          height={20}
        />
        <span className="text-[14px]">Conversations</span>
      </button>

      {/* Conversation List */}
      <ul className="flex-1 overflow-y-auto">
        {/* Example items — replace with dynamic data */}
        <li className="px-[16px] py-[12px] hover:bg-grayLight cursor-pointer flex items-center justify-between">
          <span className="text-[15px] text-ink">Conversation 1</span>
        </li>
        <li className="px-[16px] py-[12px] hover:bg-grayLight cursor-pointer flex items-center justify-between">
          <span className="text-[15px] text-ink">Conversation 2</span>
        </li>
      </ul>
    </aside>
  );
}

// src/components/chat/ChatHeader.tsx
import { IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

type ChatHeaderProps = {
  title?: string;
  roleLabel?: string;
  onMenuClick?: () => void;
  onSettingsClick?: () => void;
};

export default function ChatHeader({
  roleLabel,
  onMenuClick,
  onSettingsClick,
}: ChatHeaderProps) {
  return (
    <header className="h-[64px] flex items-center justify-between px-[24px] border-b border-gray-200 bg-white">
      {/* Left side: chatbot icon + title/role */}
      <div className="flex items-center gap-[12px]">
        {/* Chatbot SVG/Icon */}
        <Image
          src="/icons/chatbot.svg" // place your SVG in public/icons/chatbot.svg
          alt="Chatbot"
          width={32}
          height={32}
        />
        <div className="flex flex-col">
          <span className="text-[16px] font-semibold text-ink leading-tight">
          </span>
          {roleLabel && (
            <span className="text-[13px] text-inkMuted">{roleLabel}</span>
          )}
        </div>
      </div>

      {/* Right side: menu (mobile) + settings */}
      <div className="flex items-center gap-[8px]">
        {onMenuClick && (
          <IconButton
            onClick={onMenuClick}
            size="small"
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        )}
        {onSettingsClick && (
          <Tooltip title="Settings">
            <IconButton onClick={onSettingsClick} size="small">
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </header>
  );
}

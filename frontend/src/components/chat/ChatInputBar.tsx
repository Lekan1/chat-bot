// components/chat/ChatInputBar.tsx
// Uses MUI for input and send button.

import { IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatInputBar() {
  return (
     <div className="h-[56px] px-[16px] rounded-[12px] border border-gray-300 bg-white flex items-center gap-[8px]">
      <TextField
        fullWidth
        placeholder="Type your message..."
        size="small"
        variant="outlined"
        InputProps={{
          sx: { borderRadius: "12px", backgroundColor: "#fff" },
        }}
      />
      <IconButton
        color="primary"
        sx={{
          backgroundColor: "#3B82F6",
          color: "#fff",
          borderRadius: "12px",
          "&:hover": { backgroundColor: "#2563EB" },
        }}
      >
        <SendIcon />
      </IconButton>
    </div>
  );
}

// components/chat/DeleteConversationModal.tsx
// MUI Dialog for confirming conversation deletion.

// components/chat/DeleteConversationModal.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteConversationModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: 0,
          minWidth: 320,
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "18px",
          fontWeight: 600,
          pb: 1,
        }}
      >
        Delete Conversation
      </DialogTitle>

      <DialogContent
        sx={{
          fontSize: "14px",
          color: "text.secondary",
          pb: 2,
        }}
      >
        Are you sure you want to delete this conversation? This action cannot be
        undone.
      </DialogContent>

      <DialogActions
        sx={{
          gap: 1,
          px: 3,
          pb: 2,
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          sx={{
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

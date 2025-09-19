import { Router } from "express";
import {
  getConversations,
  getMessages,
  createConversation,
  sendMessage,
  deleteConversation,
} from "../controllers/chatController.js";

const router = Router();

// Conversations
router.get("/conversations", getConversations);
router.post("/conversations", createConversation);
router.delete("/conversations/:conversationId", deleteConversation);

// Messages
router.get("/conversations/:conversationId/messages", getMessages);
router.post("/messages", sendMessage);

export default router;

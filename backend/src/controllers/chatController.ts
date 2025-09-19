import { Request, Response, NextFunction } from "express";
import prisma from "../prisma/client.js";

// Fetch all conversations
export const getConversations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const conversations = await prisma.conversation.findMany({
      include: { messages: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(conversations);
  } catch (error) {
    next(error);
  }
};

// Fetch messages of a single conversation
export const getMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { conversationId } = req.params;
    const messages = await prisma.message.findMany({
      where: { conversationId: Number(conversationId) },
      orderBy: { sentAt: "asc" },
    });
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

// Create a new conversation
export const createConversation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const conversation = await prisma.conversation.create({});
    // Initial bot message
    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        sender: "bot",
        messageText: "How can I help you?",
      },
    });
    res.status(201).json(conversation);
  } catch (error) {
    next(error);
  }
};

// Send a new message
export const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { conversationId, messageText } = req.body;

    // Create user message
    const userMessage = await prisma.message.create({
      data: {
        conversationId,
        sender: "user",
        messageText,
      },
    });

    // Simulate 2-second delay and bot response
    setTimeout(async () => {
      await prisma.message.create({
        data: {
          conversationId,
          sender: "bot",
          messageText: "This is an AI generated response",
        },
      });
    }, 2000);

    res.status(201).json(userMessage);
  } catch (error) {
    next(error);
  }
};

// Delete a conversation
export const deleteConversation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { conversationId } = req.params;
    await prisma.conversation.delete({
      where: { id: Number(conversationId) },
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

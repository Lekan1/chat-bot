import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
import swaggerDocument from "./swagger.json" assert { type: "json" };

import routes from "./routes/index.js"; // 👈 Add `.js` for ESM support
import { errorHandler } from "./middlewares/errorHandler.js"; // 👈 Add `.js`

// Load env variables
dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies
app.use(morgan("dev")); // Log HTTP requests

// Minimal Swagger spec
const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Chat API",
    version: "1.0.0",
    description: "API documentation for the Chat Application"
  }
};

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API routes
app.use("/api", routes);

// Error handler (must be last)
app.use(errorHandler);

export default app;

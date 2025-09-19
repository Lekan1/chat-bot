import app from "./app.js"; // 
import { logger } from "./utils/logger.js"; //

// Port: default to 4000 if not set
const PORT = Number(process.env.PORT) || 4000;

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
  logger.info(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import artistRoutes from "./routes/artistRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import { connectDatabase } from "./config/database.js";
import { errorHandler } from './middleware/errorHandler.js';
import fs from "fs";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to attach io to requests
app.use((req, res, next) => {
  req.io = req.app.get('io');
  next();
});

// Connect to database
connectDatabase();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/events", eventRoutes);

// Serve unified client application (includes admin at /bja-control-panel)
app.use(express.static(path.join(__dirname, 'public/client')));
app.get('*', (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(__dirname, 'public/client/index.html'));
});

// Error handling middleware
app.use(errorHandler);

export default app;

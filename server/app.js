import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import artistRoutes from "./src/routes/artistRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import { connectDatabase } from "./src/config/database.js";
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
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

export default app;

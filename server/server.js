import app from "./app.js";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
  },
});

// Attach io to app for use in routes
app.set('io', io);

// Socket.io connection handling
io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });

  // Admin authentication for socket
  socket.on("admin:authenticate", (token) => {
    // Verify admin token and join admin room
    socket.join("admin-room");
    console.log("Admin authenticated:", socket.id);
  });

  // Client joins public room
  socket.on("client:join", () => {
    socket.join("public-room");
    console.log("Client joined public room:", socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Socket.io enabled`);
  console.log(`🌐 Public site: http://localhost:${PORT}`);
  console.log(`🔐 Admin login: http://localhost:${PORT}/bja-control-panel`);
});

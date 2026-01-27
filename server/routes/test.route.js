import express from "express";
import prisma from "../prisma.js";

const router = express.Router();

router.get("/db-test", async (req, res) => {
  const artists = await prisma.artist.findMany();
  res.json(artists);
});

export default router;

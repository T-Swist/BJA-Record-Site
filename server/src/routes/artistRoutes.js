import express from 'express';
import {
  getAllArtists,
  getArtistById,
  createArtist,
  updateArtist,
  deleteArtist,
  togglePublish
} from '../controllers/artistController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllArtists);
router.get('/:id', getArtistById);

// Protected routes (admin only)
router.post('/', authenticate, requireAdmin, createArtist);
router.put('/:id', authenticate, requireAdmin, updateArtist);
router.delete('/:id', authenticate, requireAdmin, deleteArtist);
router.patch('/:id/publish', authenticate, requireAdmin, togglePublish);

export default router;

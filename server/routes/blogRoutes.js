import express from 'express';
import {
  getAllBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  togglePublishBlogPost
} from '../controllers/blogController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getAllBlogPosts);
router.get('/:id', getBlogPostById);

// Protected routes (admin only)
router.post('/', authenticate, requireAdmin, createBlogPost);
router.put('/:id', authenticate, requireAdmin, updateBlogPost);
router.delete('/:id', authenticate, requireAdmin, deleteBlogPost);
router.patch('/:id/publish', authenticate, requireAdmin, togglePublishBlogPost);

export default router;

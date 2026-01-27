import express from 'express';
import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getAllSubscribers,
  deleteSubscriber,
  getSubscriberStats
} from '../controllers/newsletterController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/subscribe', subscribeToNewsletter);
router.post('/unsubscribe', unsubscribeFromNewsletter);

// Protected routes (admin only)
router.get('/', authenticate, requireAdmin, getAllSubscribers);
router.get('/stats', authenticate, requireAdmin, getSubscriberStats);
router.delete('/:id', authenticate, requireAdmin, deleteSubscriber);

export default router;

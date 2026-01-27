import express from 'express';
import {
  submitContactForm,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public route
router.post('/', submitContactForm);

// Protected routes (admin only)
router.get('/', authenticate, requireAdmin, getAllContacts);
router.get('/:id', authenticate, requireAdmin, getContactById);
router.patch('/:id/status', authenticate, requireAdmin, updateContactStatus);
router.delete('/:id', authenticate, requireAdmin, deleteContact);

export default router;

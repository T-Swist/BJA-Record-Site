import express from 'express';
import { upload, uploadFile, uploadMultiple } from '../controllers/uploadController.js';
import { authenticate, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Protected routes (admin only)
router.post('/single', authenticate, requireAdmin, upload.single('file'), uploadFile);
router.post('/multiple', authenticate, requireAdmin, upload.array('files', 10), uploadMultiple);

export default router;

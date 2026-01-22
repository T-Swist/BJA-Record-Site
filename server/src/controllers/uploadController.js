import multer from 'multer';
import { uploadToCloudinary } from '../config/cloudinary.js';
import fs from 'fs';

// Configure multer for temporary file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Accept images and audio files
  if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('audio/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image and audio files are allowed'), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  }
});

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const { folder } = req.body;
    const result = await uploadToCloudinary(req.file, folder || 'bja-record-empire');

    // Delete temporary file
    fs.unlinkSync(req.file.path);

    res.json({
      message: 'File uploaded successfully',
      file: result
    });
  } catch (error) {
    console.error('Upload error:', error);
    
    // Clean up temporary file on error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

    res.status(500).json({ error: 'Failed to upload file' });
  }
};

export const uploadMultiple = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }

    const { folder } = req.body;
    const uploadPromises = req.files.map(file => 
      uploadToCloudinary(file, folder || 'bja-record-empire')
    );

    const results = await Promise.all(uploadPromises);

    // Delete temporary files
    req.files.forEach(file => {
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    });

    res.json({
      message: 'Files uploaded successfully',
      files: results
    });
  } catch (error) {
    console.error('Upload multiple error:', error);
    
    // Clean up temporary files on error
    if (req.files) {
      req.files.forEach(file => {
        if (fs.existsSync(file.path)) {
          fs.unlinkSync(file.path);
        }
      });
    }

    res.status(500).json({ error: 'Failed to upload files' });
  }
};

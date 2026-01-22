import prisma from '../config/database.js';
import { deleteFromCloudinary } from '../config/cloudinary.js';

export const getAllArtists = async (req, res) => {
  try {
    const { published } = req.query;
    const where = published === 'true' ? { isPublished: true } : {};

    const artists = await prisma.artist.findMany({
      where,
      include: {
        projects: {
          where: published === 'true' ? { isPublished: true } : {},
          select: {
            id: true,
            title: true,
            type: true,
            coverUrl: true,
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ artists });
  } catch (error) {
    console.error('Get artists error:', error);
    res.status(500).json({ error: 'Failed to fetch artists' });
  }
};

export const getArtistById = async (req, res) => {
  try {
    const { id } = req.params;

    const artist = await prisma.artist.findUnique({
      where: { id },
      include: {
        projects: {
          include: {
            tracks: true
          }
        }
      }
    });

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    res.json({ artist });
  } catch (error) {
    console.error('Get artist error:', error);
    res.status(500).json({ error: 'Failed to fetch artist' });
  }
};

export const createArtist = async (req, res) => {
  try {
    const { name, bio, genre, imageUrl, imagePublicId, socialLinks } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Artist name is required' });
    }

    const artist = await prisma.artist.create({
      data: {
        name,
        bio,
        genre,
        imageUrl,
        imagePublicId,
        socialLinks,
      }
    });

    // Emit socket event for real-time update
    req.io.emit('artist:created', artist);

    res.status(201).json({ artist });
  } catch (error) {
    console.error('Create artist error:', error);
    res.status(500).json({ error: 'Failed to create artist' });
  }
};

export const updateArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, bio, genre, imageUrl, imagePublicId, socialLinks, isPublished } = req.body;

    const existingArtist = await prisma.artist.findUnique({ where: { id } });

    if (!existingArtist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    // Delete old image if new one is uploaded
    if (imagePublicId && existingArtist.imagePublicId && imagePublicId !== existingArtist.imagePublicId) {
      await deleteFromCloudinary(existingArtist.imagePublicId);
    }

    const artist = await prisma.artist.update({
      where: { id },
      data: {
        name,
        bio,
        genre,
        imageUrl,
        imagePublicId,
        socialLinks,
        isPublished,
      }
    });

    // Emit socket event for real-time update
    req.io.emit('artist:updated', artist);

    res.json({ artist });
  } catch (error) {
    console.error('Update artist error:', error);
    res.status(500).json({ error: 'Failed to update artist' });
  }
};

export const deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;

    const artist = await prisma.artist.findUnique({ where: { id } });

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    // Delete image from Cloudinary
    if (artist.imagePublicId) {
      await deleteFromCloudinary(artist.imagePublicId);
    }

    await prisma.artist.delete({ where: { id } });

    // Emit socket event for real-time update
    req.io.emit('artist:deleted', { id });

    res.json({ message: 'Artist deleted successfully' });
  } catch (error) {
    console.error('Delete artist error:', error);
    res.status(500).json({ error: 'Failed to delete artist' });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.params;

    const artist = await prisma.artist.findUnique({ where: { id } });

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    const updatedArtist = await prisma.artist.update({
      where: { id },
      data: { isPublished: !artist.isPublished }
    });

    // Emit socket event for real-time update
    req.io.emit('artist:published', updatedArtist);

    res.json({ artist: updatedArtist });
  } catch (error) {
    console.error('Toggle publish error:', error);
    res.status(500).json({ error: 'Failed to toggle publish status' });
  }
};

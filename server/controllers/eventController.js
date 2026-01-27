import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all published events
export const getAllEvents = async (req, res) => {
  try {
    const { status } = req.query;
    
    const where = { isPublished: true };
    if (status) {
      where.status = status;
    }

    const events = await prisma.event.findMany({
      where,
      orderBy: { date: 'asc' }
    });

    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
};

// Get single event by ID
export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const event = await prisma.event.findUnique({
      where: { id }
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
};

// Create event (admin only)
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, imageUrl, imagePublicId, attendees } = req.body;

    if (!title || !description || !date || !time || !location) {
      return res.status(400).json({ error: 'Title, description, date, time, and location are required' });
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        time,
        location,
        imageUrl,
        imagePublicId,
        attendees: attendees ? parseInt(attendees) : 0
      }
    });

    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
};

// Update event (admin only)
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, time, location, imageUrl, imagePublicId, attendees, status } = req.body;

    const event = await prisma.event.update({
      where: { id },
      data: {
        title,
        description,
        date: date ? new Date(date) : undefined,
        time,
        location,
        imageUrl,
        imagePublicId,
        attendees: attendees ? parseInt(attendees) : undefined,
        status,
        updatedAt: new Date()
      }
    });

    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ error: 'Failed to update event' });
  }
};

// Delete event (admin only)
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.event.delete({
      where: { id }
    });

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ error: 'Failed to delete event' });
  }
};

// Toggle publish status (admin only)
export const togglePublishEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id }
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        isPublished: !event.isPublished
      }
    });

    res.json(updatedEvent);
  } catch (error) {
    console.error('Error toggling publish status:', error);
    res.status(500).json({ error: 'Failed to toggle publish status' });
  }
};

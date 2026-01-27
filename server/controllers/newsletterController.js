import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Subscribe to newsletter
export const subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if email already exists
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email }
    });

    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      } else {
        // Reactivate subscription
        const subscriber = await prisma.newsletter.update({
          where: { email },
          data: { isActive: true, updatedAt: new Date() }
        });
        return res.json({ 
          message: 'Newsletter subscription reactivated successfully',
          subscriber 
        });
      }
    }

    const subscriber = await prisma.newsletter.create({
      data: { email }
    });

    // Emit socket event for real-time notification
    if (req.io) {
      req.io.emit('new-subscriber', subscriber);
    }

    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter',
      subscriber 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ error: 'Failed to subscribe to newsletter' });
  }
};

// Unsubscribe from newsletter
export const unsubscribeFromNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const subscriber = await prisma.newsletter.findUnique({
      where: { email }
    });

    if (!subscriber) {
      return res.status(404).json({ error: 'Email not found in subscribers list' });
    }

    await prisma.newsletter.update({
      where: { email },
      data: { isActive: false }
    });

    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    console.error('Error unsubscribing from newsletter:', error);
    res.status(500).json({ error: 'Failed to unsubscribe from newsletter' });
  }
};

// Get all subscribers (admin only)
export const getAllSubscribers = async (req, res) => {
  try {
    const { isActive } = req.query;
    
    const where = {};
    if (isActive !== undefined) {
      where.isActive = isActive === 'true';
    }

    const subscribers = await prisma.newsletter.findMany({
      where,
      orderBy: { subscribedAt: 'desc' }
    });

    res.json(subscribers);
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
};

// Delete subscriber (admin only)
export const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.newsletter.delete({
      where: { id }
    });

    res.json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    res.status(500).json({ error: 'Failed to delete subscriber' });
  }
};

// Get subscriber stats (admin only)
export const getSubscriberStats = async (req, res) => {
  try {
    const totalSubscribers = await prisma.newsletter.count();
    const activeSubscribers = await prisma.newsletter.count({
      where: { isActive: true }
    });
    const inactiveSubscribers = await prisma.newsletter.count({
      where: { isActive: false }
    });

    res.json({
      total: totalSubscribers,
      active: activeSubscribers,
      inactive: inactiveSubscribers
    });
  } catch (error) {
    console.error('Error fetching subscriber stats:', error);
    res.status(500).json({ error: 'Failed to fetch subscriber stats' });
  }
};

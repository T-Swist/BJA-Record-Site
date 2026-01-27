import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Submit contact form
export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
        status: 'new'
      }
    });

    // Emit socket event for real-time notification (if socket.io is configured)
    if (req.io) {
      req.io.emit('new-contact', contact);
    }

    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      contact 
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

// Get all contacts (admin only)
export const getAllContacts = async (req, res) => {
  try {
    const { status } = req.query;
    
    const where = {};
    if (status) {
      where.status = status;
    }

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Get single contact by ID (admin only)
export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Mark as read if status is 'new'
    if (contact.status === 'new') {
      await prisma.contact.update({
        where: { id },
        data: { status: 'read' }
      });
    }

    res.json(contact);
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};

// Update contact status (admin only)
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const contact = await prisma.contact.update({
      where: { id },
      data: { status }
    });

    res.json(contact);
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ error: 'Failed to update contact status' });
  }
};

// Delete contact (admin only)
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.contact.delete({
      where: { id }
    });

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

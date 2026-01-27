import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all published blog posts
export const getAllBlogPosts = async (req, res) => {
  try {
    const { category } = req.query;
    
    const where = { isPublished: true };
    if (category) {
      where.category = category;
    }

    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { publishedAt: 'desc' }
    });

    res.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
};

// Get single blog post by ID
export const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const post = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
};

// Create blog post (admin only)
export const createBlogPost = async (req, res) => {
  try {
    const { title, content, excerpt, category, author, imageUrl, imagePublicId, readTime } = req.body;

    if (!title || !content || !category || !author) {
      return res.status(400).json({ error: 'Title, content, category, and author are required' });
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        content,
        excerpt,
        category,
        author,
        imageUrl,
        imagePublicId,
        readTime: readTime ? parseInt(readTime) : null
      }
    });

    res.status(201).json(post);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};

// Update blog post (admin only)
export const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, excerpt, category, author, imageUrl, imagePublicId, readTime } = req.body;

    const post = await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        category,
        author,
        imageUrl,
        imagePublicId,
        readTime: readTime ? parseInt(readTime) : null,
        updatedAt: new Date()
      }
    });

    res.json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

// Delete blog post (admin only)
export const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.blogPost.delete({
      where: { id }
    });

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};

// Toggle publish status (admin only)
export const togglePublishBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!post) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id },
      data: {
        isPublished: !post.isPublished,
        publishedAt: !post.isPublished ? new Date() : null
      }
    });

    res.json(updatedPost);
  } catch (error) {
    console.error('Error toggling publish status:', error);
    res.status(500).json({ error: 'Failed to toggle publish status' });
  }
};

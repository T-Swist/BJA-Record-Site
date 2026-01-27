# BJA Record Empire - Backend Integration Guide

## Overview
This guide explains the complete backend setup and how data flows from the client to the server to the database.

## Architecture

### Backend Structure
```
server/
├── controllers/          # Business logic
│   ├── authController.js
│   ├── artistController.js
│   ├── blogController.js
│   ├── contactController.js
│   ├── newsletterController.js
│   ├── eventController.js
│   └── uploadController.js
├── routes/              # API endpoints
│   ├── authRoutes.js
│   ├── artistRoutes.js
│   ├── blogRoutes.js
│   ├── contactRoutes.js
│   ├── newsletterRoutes.js
│   ├── eventRoutes.js
│   └── uploadRoutes.js
├── middleware/          # Request processing
│   ├── auth.js         # JWT authentication
│   └── errorHandler.js # Error handling
├── config/             # Configuration
│   └── database.js     # Prisma client
├── prisma/             # Database schema
│   └── schema.prisma
└── app.js              # Express app setup
```

## Database Models

### 1. Admin
- User authentication for admin panel
- Fields: id, email, password, name, role

### 2. Artist
- Artist profiles with bio, genre, images
- Fields: id, name, bio, genre, imageUrl, socialLinks, isPublished

### 3. Project
- Albums, EPs, Singles
- Fields: id, title, description, releaseDate, coverUrl, type, artistId

### 4. Track
- Individual songs
- Fields: id, title, duration, trackNumber, audioUrl, streamingLinks, projectId

### 5. BlogPost
- Blog articles
- Fields: id, title, content, excerpt, category, author, imageUrl, readTime, isPublished

### 6. Contact
- Contact form submissions
- Fields: id, name, email, subject, message, status

### 7. Newsletter
- Newsletter subscriptions
- Fields: id, email, isActive, subscribedAt

### 8. Event
- Social club events
- Fields: id, title, description, date, time, location, imageUrl, attendees, status

### 9. News
- News articles
- Fields: id, title, content, excerpt, imageUrl, author, isPublished

## API Endpoints

### Public Endpoints (No Authentication Required)

#### Artists
- `GET /api/artists` - Get all published artists
- `GET /api/artists/:id` - Get single artist

#### Blog
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:id` - Get single blog post

#### Contact
- `POST /api/contact` - Submit contact form

#### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

#### Events
- `GET /api/events` - Get all published events
- `GET /api/events/:id` - Get single event

### Protected Endpoints (Admin Authentication Required)

#### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current admin

#### Artists (Admin)
- `POST /api/artists` - Create artist
- `PUT /api/artists/:id` - Update artist
- `DELETE /api/artists/:id` - Delete artist
- `PATCH /api/artists/:id/publish` - Toggle publish status

#### Blog (Admin)
- `POST /api/blog` - Create blog post
- `PUT /api/blog/:id` - Update blog post
- `DELETE /api/blog/:id` - Delete blog post
- `PATCH /api/blog/:id/publish` - Toggle publish status

#### Contact (Admin)
- `GET /api/contact` - Get all contacts
- `GET /api/contact/:id` - Get single contact
- `PATCH /api/contact/:id/status` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

#### Newsletter (Admin)
- `GET /api/newsletter` - Get all subscribers
- `GET /api/newsletter/stats` - Get subscriber statistics
- `DELETE /api/newsletter/:id` - Delete subscriber

#### Events (Admin)
- `POST /api/events` - Create event
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event
- `PATCH /api/events/:id/publish` - Toggle publish status

#### Upload
- `POST /api/upload/image` - Upload image to Cloudinary
- `POST /api/upload/audio` - Upload audio file

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the server directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bja_record_empire"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Cloudinary (for file uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Server
PORT=5000
NODE_ENV="development"
```

### 3. Run Database Migrations

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations to create tables
npx prisma migrate dev --name init

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

### 4. Create Admin User

```bash
npm run create-admin
```

Follow the prompts to create your first admin user.

### 5. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## Client Integration

### Frontend API Configuration

The client uses RTK Query for API calls. All API slices are located in:
```
client/src/store/api/
├── baseApi.ts          # Base configuration
├── artistApi.ts        # Artist endpoints
├── blogApi.ts          # Blog endpoints
├── contactApi.ts       # Contact endpoints
├── newsletterApi.ts    # Newsletter endpoints
├── eventApi.ts         # Event endpoints
└── uploadApi.ts        # Upload endpoints
```

### Example: Contact Form Submission

**Frontend (Contact.tsx)**
```typescript
import { useSubmitContactFormMutation } from '../store/api/contactApi';

const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await submitContactForm(formData).unwrap();
    // Success handling
  } catch (error) {
    // Error handling
  }
};
```

**Backend Flow:**
1. Request hits `/api/contact` endpoint
2. `contactRoutes.js` routes to `submitContactForm` controller
3. `contactController.js` validates data and saves to database via Prisma
4. Response sent back to client
5. Database record created in `Contact` table

### Example: Newsletter Subscription

**Frontend (Footer.tsx)**
```typescript
import { useSubscribeToNewsletterMutation } from '../store/api/newsletterApi';

const [subscribeToNewsletter, { isLoading }] = useSubscribeToNewsletterMutation();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await subscribeToNewsletter({ email }).unwrap();
    // Success handling
  } catch (error) {
    // Error handling
  }
};
```

**Backend Flow:**
1. Request hits `/api/newsletter/subscribe` endpoint
2. `newsletterRoutes.js` routes to `subscribeToNewsletter` controller
3. `newsletterController.js` validates email and checks for duplicates
4. Creates new subscriber record in database
5. Emits socket event for real-time notification (if configured)
6. Response sent back to client

## Authentication Flow

### Admin Login
1. Admin enters credentials at `/bja-control-panel`
2. `POST /api/auth/login` with email and password
3. Server validates credentials using bcrypt
4. JWT token generated and returned
5. Client stores token in localStorage
6. Token automatically attached to all subsequent requests via `baseApi.ts`

### Protected Routes
1. Client sends request with JWT token in Authorization header
2. `authenticate` middleware verifies token
3. `requireAdmin` middleware checks admin role
4. Request proceeds to controller if valid
5. 401/403 error returned if invalid

## Error Handling

### Backend Error Handler
Located in `middleware/errorHandler.js`, handles:
- Prisma errors (duplicate keys, not found, etc.)
- JWT errors (invalid token, expired token)
- Validation errors
- General server errors

### Frontend Error Handling
- RTK Query automatically handles network errors
- Components display user-friendly error messages
- Failed requests can be retried

## Real-time Features (Socket.io)

Socket events are emitted for:
- New contact form submissions
- New newsletter subscriptions
- Admin notifications

Configure socket.io in `server.js` to enable real-time updates.

## Data Validation

### Backend Validation
- Required fields checked in controllers
- Email format validation
- Data type validation
- Business logic validation (e.g., duplicate emails)

### Frontend Validation
- HTML5 form validation (required, email type)
- Custom validation in components
- Real-time feedback to users

## Security Features

1. **CORS**: Configured to allow client requests
2. **JWT Authentication**: Secure token-based auth
3. **Password Hashing**: bcrypt for password storage
4. **Input Sanitization**: Prisma prevents SQL injection
5. **Error Messages**: Generic messages to prevent information leakage

## Testing the Integration

### 1. Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "Test message"
  }'
```

### 2. Test Newsletter Subscription
```bash
curl -X POST http://localhost:5000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```

### 3. Test Admin Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "your-password"
  }'
```

## Database Queries

View data using Prisma Studio:
```bash
npx prisma studio
```

Or query directly:
```javascript
// Get all contacts
const contacts = await prisma.contact.findMany();

// Get all newsletter subscribers
const subscribers = await prisma.newsletter.findMany();

// Get published blog posts
const posts = await prisma.blogPost.findMany({
  where: { isPublished: true }
});
```

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL in .env
- Ensure PostgreSQL is running
- Check database credentials

### CORS Errors
- Verify CORS is enabled in app.js
- Check client API URL configuration

### Authentication Errors
- Verify JWT_SECRET is set
- Check token expiration
- Ensure token is being sent in headers

### Migration Errors
- Delete migrations folder and run `npx prisma migrate dev` again
- Reset database: `npx prisma migrate reset`

## Production Deployment

1. Set NODE_ENV=production
2. Use strong JWT_SECRET
3. Configure production database
4. Enable HTTPS
5. Set up proper logging
6. Configure rate limiting
7. Set up database backups

## Next Steps

1. Build the client: `cd client && npm run build`
2. Copy build to `server/public/client`
3. Start server: `npm start`
4. Access application at `http://localhost:5000`
5. Admin panel at `http://localhost:5000/bja-control-panel`

## Support

For issues or questions:
- Check server logs
- Review Prisma Studio for database state
- Test API endpoints with curl or Postman
- Check browser console for client errors

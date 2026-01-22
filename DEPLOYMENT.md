# BJA Record Empire - Single Server Deployment Guide

## Overview
BJA Record Empire now runs as a **unified application** on a single server:
- **Public Site**: `http://localhost:5000/`
- **Admin Dashboard**: `http://localhost:5000/admin`
- **API**: `http://localhost:5000/api`

## Architecture

```
┌─────────────────────────────────────────┐
│         Single Server (Port 5000)       │
│                                         │
│  ┌────────────────────────────────┐   │
│  │   Express Server + Socket.io   │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │   API    │  │ Socket.io│           │
│  │ /api/*   │  │ Real-time│           │
│  └──────────┘  └──────────┘           │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │  Static Files                    │ │
│  │  ┌─────────┐    ┌─────────────┐ │ │
│  │  │ Client  │    │    Admin    │ │ │
│  │  │   /     │    │   /admin    │ │ │
│  │  └─────────┘    └─────────────┘ │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │  PostgreSQL + Cloudinary         │ │
│  └──────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Server
cd server
npm install

# Client
cd ../client
npm install

# Admin
cd ../admin
npm install
```

### 2. Configure Environment

**Server `.env`:**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://username:password@localhost:5432/bjarecordempire"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Client `.env`:**
```bash
cd ../client
cp .env.example .env
```

Edit `client/.env`:
```env
VITE_API_URL=/api
VITE_SOCKET_URL=
```

**Admin `.env`:**
```bash
cd ../admin
cp .env.example .env
```

Edit `admin/.env`:
```env
VITE_API_URL=/api
VITE_SOCKET_URL=
```

### 3. Set Up Database

```bash
cd server

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Create admin user manually in database
npx prisma studio
```

**Create Admin User:**
1. Open Prisma Studio: `npx prisma studio`
2. Go to `Admin` model
3. Click "Add record"
4. Fill in:
   - `email`: your-email@example.com
   - `password`: Use bcrypt to hash your password (see below)
   - `name`: Your Name
   - `role`: admin

**Hash Password (Node.js):**
```javascript
// Run this in Node.js REPL or create a script
const bcrypt = require('bcrypt');
const password = 'your-password';
bcrypt.hash(password, 10).then(hash => console.log(hash));
```

### 4. Build Frontend Applications

```bash
# Build client
cd client
npm run build

# Build admin
cd ../admin
npm run build
```

This will create:
- `server/public/client/` - Public site
- `server/public/admin/` - Admin dashboard

### 5. Start the Server

```bash
cd server
npm run dev
```

The server will start on port 5000 with:
- **Public Site**: http://localhost:5000
- **Admin Login**: http://localhost:5000/admin
- **API**: http://localhost:5000/api

## Development Workflow

### Option 1: Development Mode (Recommended)

Run all three in separate terminals for hot-reload:

**Terminal 1 - Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Client:**
```bash
cd client
npm run dev
```

**Terminal 3 - Admin:**
```bash
cd admin
npm run dev
```

Access:
- Client: http://localhost:3000 (with API proxy to :5000)
- Admin: http://localhost:3001 (with API proxy to :5000)
- Server: http://localhost:5000

### Option 2: Production Mode

Build and serve everything from one server:

```bash
# Build frontends
cd client && npm run build
cd ../admin && npm run build

# Start server
cd ../server
npm start
```

Access everything at http://localhost:5000

## Admin Access

### Login URL
**http://localhost:5000/admin**

This is the only way to access the admin dashboard. There is no registration page.

### Admin Credentials
Use the credentials you created in the database:
- Email: your-email@example.com
- Password: your-password

### No Registration
- Registration has been **completely removed**
- Only pre-created admin users can log in
- Create admin users directly in the database using Prisma Studio

## Project Structure

```
BJA Record/
├── server/                 # Backend server
│   ├── src/
│   │   ├── config/        # Database, Cloudinary config
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Auth middleware
│   │   ├── routes/        # API routes
│   │   └── utils/         # JWT utilities
│   ├── public/            # Built frontend files
│   │   ├── client/        # Public site (built)
│   │   └── admin/         # Admin dashboard (built)
│   ├── prisma/            # Database schema
│   ├── app.js             # Express app
│   ├── server.js          # Server entry point
│   └── package.json
│
├── client/                # Public site (React)
│   ├── src/
│   │   ├── store/         # Redux store
│   │   ├── pages/         # Page components
│   │   └── components/    # Shared components
│   ├── vite.config.ts     # Builds to server/public/client
│   └── package.json
│
└── admin/                 # Admin dashboard (React)
    ├── src/
    │   ├── store/         # Redux store
    │   ├── pages/         # Admin pages
    │   └── components/    # Admin components
    ├── vite.config.ts     # Builds to server/public/admin
    └── package.json
```

## API Endpoints

### Authentication (Admin Only)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get admin profile (protected)

### Artists
- `GET /api/artists` - Get all artists
- `GET /api/artists/:id` - Get artist by ID
- `POST /api/artists` - Create artist (admin only)
- `PUT /api/artists/:id` - Update artist (admin only)
- `DELETE /api/artists/:id` - Delete artist (admin only)
- `PATCH /api/artists/:id/publish` - Toggle publish (admin only)

### Upload
- `POST /api/upload/single` - Upload single file (admin only)
- `POST /api/upload/multiple` - Upload multiple files (admin only)

## Deployment to Production

### Build for Production

```bash
# Build client
cd client
npm run build

# Build admin
cd ../admin
npm run build

# The builds are automatically placed in server/public/
```

### Environment Variables

Set these in your production environment:
```env
PORT=5000
NODE_ENV=production
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-secret"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### Start Production Server

```bash
cd server
npm start
```

### Deploy to Hosting Platform

**Heroku:**
```bash
# In server directory
heroku create bja-record-empire
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set JWT_SECRET=your-secret
heroku config:set CLOUDINARY_CLOUD_NAME=your-cloud
# ... set other env vars
git push heroku main
```

**DigitalOcean/VPS:**
1. Install Node.js and PostgreSQL
2. Clone repository
3. Set up environment variables
4. Build frontends
5. Run with PM2: `pm2 start server/server.js`

**Vercel/Netlify:**
Not recommended - use a VPS or platform that supports Node.js servers.

## Troubleshooting

### Admin page shows 404
- Ensure you've built the admin: `cd admin && npm run build`
- Check that `server/public/admin/index.html` exists
- Restart the server

### API calls fail
- Check that server is running on port 5000
- Verify `.env` files are configured correctly
- Check browser console for CORS errors

### Database connection fails
- Verify PostgreSQL is running
- Check `DATABASE_URL` in `server/.env`
- Run `npx prisma migrate dev`

### Can't login to admin
- Verify admin user exists in database
- Check password is correctly hashed with bcrypt
- Check JWT_SECRET is set in `.env`

### Socket.io not connecting
- Ensure server is running
- Check browser console for connection errors
- Verify no firewall blocking WebSocket connections

## Security Notes

### Admin Access
- Admin dashboard is at `/admin` - simple and memorable
- No registration page - admins must be created in database
- Only authorized admins can access protected routes
- JWT tokens expire based on `JWT_EXPIRES_IN` setting

### Best Practices
1. Use strong passwords for admin accounts
2. Change `JWT_SECRET` in production
3. Enable HTTPS in production
4. Set `NODE_ENV=production` in production
5. Regularly update dependencies
6. Backup database regularly

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Set up PostgreSQL database
4. ✅ Create admin user in database
5. ✅ Build frontend applications
6. ✅ Start server
7. ✅ Access admin at http://localhost:5000/admin
8. ✅ Login with admin credentials
9. Create artists, projects, and content
10. Deploy to production

## Support

For issues or questions:
- Email: support@bjarecordempire.com
- Check logs: `server/logs/` (if configured)
- Database GUI: `npx prisma studio`

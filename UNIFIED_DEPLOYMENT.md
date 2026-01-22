# BJA Record Empire - Unified Application Deployment Guide

## Overview
BJA Record Empire is now a **unified single-page application** that combines both the public site and admin dashboard into one React application, served from a single Node.js server.

### Key Features
- **One Application**: Admin and public site are part of the same React app
- **One Server**: Single Node.js/Express server on port 5000
- **Non-obvious Admin URL**: Admin login at `/bja-control-panel` (not easily guessable)
- **No Registration**: Admin users must be created directly in the database
- **Protected Routes**: Admin pages require authentication via JWT

## Architecture

```
┌─────────────────────────────────────────┐
│    Single Server (Port 5000)            │
│                                         │
│  ┌────────────────────────────────┐   │
│  │   Express + Socket.io          │   │
│  │   API Routes (/api/*)          │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌────────────────────────────────┐   │
│  │  Unified React Application     │   │
│  │                                │   │
│  │  Public Routes:                │   │
│  │  - / (Home)                    │   │
│  │  - /our-story                  │   │
│  │  - /services                   │   │
│  │  - /gallery, /tickets, etc.    │   │
│  │                                │   │
│  │  Admin Routes (Protected):     │   │
│  │  - /bja-control-panel          │   │
│  │  - /bja-control-panel/dashboard│   │
│  │  - /bja-control-panel/artists  │   │
│  │  - /bja-control-panel/projects │   │
│  │  - /bja-control-panel/news     │   │
│  └────────────────────────────────┘   │
│                                         │
│  PostgreSQL + Cloudinary               │
└─────────────────────────────────────────┘
```

## Setup Instructions

### 1. Install Dependencies

```bash
# Server
cd server
npm install

# Client (unified app)
cd ../client
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
JWT_SECRET=your-super-secret-jwt-key-change-this
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

### 3. Set Up Database

```bash
cd server

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init
```

### 4. Create Admin User

**Option 1: Using the Script (Recommended)**
```bash
cd server
npm run create-admin
```

Follow the prompts to enter:
- Admin name
- Admin email
- Admin password

**Option 2: Using Prisma Studio**
```bash
cd server
npx prisma studio
```

1. Open `Admin` model
2. Click "Add record"
3. Fill in fields (password must be bcrypt hashed)

**Hash Password (Node.js):**
```javascript
const bcrypt = require('bcrypt');
bcrypt.hash('your-password', 10).then(hash => console.log(hash));
```

### 5. Build and Deploy

**Development Mode (Hot Reload):**
```bash
# Terminal 1 - Server
cd server
npm run dev

# Terminal 2 - Client (dev mode with proxy)
cd client
npm run dev
```

Access:
- Public site: http://localhost:3000
- Admin login: http://localhost:3000/bja-control-panel
- API proxied to: http://localhost:5000/api

**Production Mode (Single Server):**
```bash
# Build the unified client app
cd client
npm run build

# Start the server
cd ../server
npm start
```

Access everything at:
- Public site: http://localhost:5000
- Admin login: http://localhost:5000/bja-control-panel

## Admin Access

### Login URL
**http://localhost:5000/bja-control-panel**

This URL is intentionally non-obvious for security. Only share with authorized administrators.

### Authentication Flow
1. Navigate to `/bja-control-panel`
2. Enter admin email and password
3. JWT token stored in localStorage
4. Redirected to `/bja-control-panel/dashboard`
5. Protected routes check authentication status

### Admin Pages
- **Dashboard**: `/bja-control-panel/dashboard` - Overview and navigation
- **Artists**: `/bja-control-panel/artists` - Manage artists
- **Projects**: `/bja-control-panel/projects` - Manage music projects
- **News**: `/bja-control-panel/news` - Manage news articles

### No Registration
- There is **NO registration page or endpoint**
- Admin users can only be created via:
  - Database script: `npm run create-admin`
  - Prisma Studio: `npx prisma studio`
  - Direct database access

## Project Structure

```
BJA Record/
├── server/                    # Backend
│   ├── src/
│   │   ├── config/           # Database, Cloudinary
│   │   ├── controllers/      # Auth, Artists, Upload
│   │   ├── middleware/       # JWT authentication
│   │   ├── routes/           # API routes
│   │   └── utils/            # JWT utilities
│   ├── scripts/
│   │   └── createAdmin.js    # Admin creation script
│   ├── public/
│   │   └── client/           # Built React app
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── app.js                # Express app
│   ├── server.js             # Server entry
│   └── package.json
│
└── client/                    # Unified React App
    ├── src/
    │   ├── pages/
    │   │   ├── Home.tsx      # Public pages
    │   │   ├── OurStory.tsx
    │   │   └── admin/        # Admin pages
    │   │       ├── Login.tsx
    │   │       ├── Dashboard.tsx
    │   │       ├── Artists.tsx
    │   │       ├── Projects.tsx
    │   │       └── News.tsx
    │   ├── components/
    │   │   ├── ProtectedRoute.tsx  # Auth guard
    │   │   └── shared/       # Shared components
    │   ├── store/            # Redux store
    │   │   ├── api/          # RTK Query APIs
    │   │   │   ├── baseApi.ts
    │   │   │   ├── authApi.ts
    │   │   │   ├── artistApi.ts
    │   │   │   └── uploadApi.ts
    │   │   ├── slices/
    │   │   │   └── authSlice.ts
    │   │   ├── index.ts      # Store config
    │   │   └── hooks.ts      # Typed hooks
    │   └── routes/
    │       └── AppRoutes.tsx # All routes
    ├── vite.config.ts        # Builds to server/public/client
    └── package.json
```

## API Endpoints

### Authentication (Admin Only)
- `POST /api/auth/login` - Admin login (returns JWT token)
- `GET /api/auth/profile` - Get admin profile (requires auth)

### Artists
- `GET /api/artists` - Get all artists (public)
- `GET /api/artists/:id` - Get artist by ID (public)
- `POST /api/artists` - Create artist (admin only)
- `PUT /api/artists/:id` - Update artist (admin only)
- `DELETE /api/artists/:id` - Delete artist (admin only)
- `PATCH /api/artists/:id/publish` - Toggle publish status (admin only)

### Upload
- `POST /api/upload/single` - Upload single file to Cloudinary (admin only)
- `POST /api/upload/multiple` - Upload multiple files (admin only)

## Redux State Management

### Store Structure
```typescript
{
  api: {
    // RTK Query cache
    queries: {},
    mutations: {}
  },
  auth: {
    admin: Admin | null,
    token: string | null,
    isAuthenticated: boolean
  }
}
```

### Using Redux in Components

**Admin Login:**
```tsx
import { useLoginMutation } from '../../store/api/authApi';
import { useAppDispatch } from '../../store/hooks';
import { setCredentials } from '../../store/slices/authSlice';

const [login, { isLoading }] = useLoginMutation();
const dispatch = useAppDispatch();

const handleLogin = async (email, password) => {
  const result = await login({ email, password }).unwrap();
  dispatch(setCredentials({ admin: result.admin, token: result.token }));
};
```

**Protected Routes:**
```tsx
import { useAppSelector } from '../store/hooks';

const { isAuthenticated } = useAppSelector(state => state.auth);
if (!isAuthenticated) return <Navigate to="/bja-control-panel" />;
```

**Fetching Artists:**
```tsx
import { useGetPublishedArtistsQuery } from '../store/api/artistApi';

const { data, isLoading } = useGetPublishedArtistsQuery();
```

## Security Best Practices

### Admin URL
- `/bja-control-panel` is non-obvious
- Change this URL in production to something unique
- Update in `client/src/routes/AppRoutes.tsx`

### JWT Tokens
- Stored in localStorage as `admin_token`
- Automatically attached to API requests via Redux baseApi
- Expires based on `JWT_EXPIRES_IN` setting

### Password Security
- All passwords hashed with bcrypt (10 rounds)
- Never store plain text passwords
- Use strong passwords for admin accounts

### Production Checklist
- [ ] Change `JWT_SECRET` to a strong random string
- [ ] Set `NODE_ENV=production`
- [ ] Use HTTPS in production
- [ ] Change admin URL from `/bja-control-panel` to something unique
- [ ] Enable database backups
- [ ] Set up error logging
- [ ] Configure CORS if needed
- [ ] Use environment variables for all secrets

## Deployment to Production

### Build for Production

```bash
# Build the unified client app
cd client
npm run build

# This creates server/public/client/ with optimized build
```

### Environment Variables

Set in your production environment:
```env
PORT=5000
NODE_ENV=production
DATABASE_URL="your-production-postgres-url"
JWT_SECRET="your-strong-random-secret"
CLOUDINARY_CLOUD_NAME="your-cloud"
CLOUDINARY_API_KEY="your-key"
CLOUDINARY_API_SECRET="your-secret"
```

### Deploy to Hosting

**Heroku:**
```bash
cd server
heroku create bja-record-empire
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set JWT_SECRET=your-secret
# Set other env vars
git push heroku main
```

**DigitalOcean/VPS:**
```bash
# Install Node.js and PostgreSQL
# Clone repository
# Set environment variables
# Build client
cd client && npm run build

# Run with PM2
cd ../server
npm install -g pm2
pm2 start server.js --name bja-record
pm2 save
pm2 startup
```

**Render/Railway:**
1. Connect GitHub repository
2. Set build command: `cd client && npm install && npm run build && cd ../server && npm install`
3. Set start command: `cd server && npm start`
4. Add environment variables
5. Deploy

## Troubleshooting

### Admin login not working
- Verify admin user exists in database
- Check password is correctly hashed
- Verify `JWT_SECRET` is set in `.env`
- Check browser console for errors

### API calls failing
- Ensure server is running on port 5000
- Check `.env` files are configured
- Verify database connection
- Check browser network tab

### Build errors
- Run `npm install` in both client and server
- Clear node_modules and reinstall
- Check for TypeScript errors

### Socket.io not connecting
- Verify server is running
- Check CORS configuration
- Ensure WebSocket support

## Development Workflow

### Making Changes

**Public Pages:**
1. Edit files in `client/src/pages/`
2. Changes auto-reload in dev mode
3. Build for production when ready

**Admin Pages:**
1. Edit files in `client/src/pages/admin/`
2. Test authentication flow
3. Verify protected routes work

**API Endpoints:**
1. Add routes in `server/src/routes/`
2. Add controllers in `server/src/controllers/`
3. Update RTK Query APIs in `client/src/store/api/`

### Testing

**Test Admin Flow:**
1. Navigate to `/bja-control-panel`
2. Login with admin credentials
3. Verify redirect to dashboard
4. Test protected routes
5. Test logout

**Test Public Site:**
1. Navigate to `/`
2. Browse public pages
3. Verify no admin access without login

## Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. ✅ Set up PostgreSQL database
4. ✅ Create admin user
5. ✅ Build unified application
6. ✅ Start server
7. ✅ Access public site at http://localhost:5000
8. ✅ Access admin at http://localhost:5000/bja-control-panel
9. Implement full CRUD for artists, projects, news
10. Add real-time Socket.io updates
11. Deploy to production

## Support

For issues or questions:
- Check logs in terminal
- Use Prisma Studio: `npx prisma studio`
- Check browser console for frontend errors
- Verify API responses in Network tab

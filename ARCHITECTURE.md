# BJA Record Empire - System Architecture

## Overview
BJA Record Empire is a full-stack music record label platform with three interconnected applications:
- **Client** (Public Site): Port 3000
- **Admin** (Dashboard): Port 3001  
- **Server** (Backend API): Port 5000

## Technology Stack

### Backend (Server)
- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time**: Socket.io
- **File Storage**: Cloudinary
- **Security**: bcrypt, helmet, CORS

### Frontend (Client & Admin)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Real-time**: Socket.io Client

## Architecture Flow

```
┌─────────────────┐         ┌─────────────────┐
│  Client (3000)  │         │  Admin (3001)   │
│  Public Site    │         │  Dashboard      │
└────────┬────────┘         └────────┬────────┘
         │                           │
         │  HTTP/REST API            │  HTTP/REST API
         │  Socket.io (real-time)    │  Socket.io (updates)
         │                           │
         └───────────┬───────────────┘
                     │
              ┌──────▼──────┐
              │   Server    │
              │   (5000)    │
              │             │
              │  Express    │
              │  Socket.io  │
              └──────┬──────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
    ┌────▼────┐ ┌───▼────┐ ┌───▼────────┐
    │PostgreSQL│ │  JWT   │ │ Cloudinary │
    │ Database │ │  Auth  │ │   Media    │
    └──────────┘ └────────┘ └────────────┘
```

## Data Flow

### Admin → Server → Database → Client (Real-time)
1. Admin creates/updates content (artist, project, track, news)
2. Server validates JWT token and admin role
3. Server saves to PostgreSQL database
4. Server emits Socket.io event
5. Client receives real-time update
6. Client UI updates automatically

### Client → Server → Database
1. Client requests published content
2. Server queries database (filtered by isPublished=true)
3. Server returns data to client
4. Client displays content

## Database Schema

### Admin
- id (UUID)
- email (unique)
- password (hashed)
- name
- role (default: "admin")
- timestamps

### Artist
- id (UUID)
- name
- bio
- genre
- imageUrl, imagePublicId (Cloudinary)
- socialLinks (JSON)
- isPublished (boolean)
- projects (relation)
- timestamps

### Project
- id (UUID)
- title
- description
- releaseDate
- coverUrl, coverPublicId (Cloudinary)
- type (album/single/EP)
- artistId (foreign key)
- tracks (relation)
- isPublished (boolean)
- timestamps

### Track
- id (UUID)
- title
- duration (seconds)
- trackNumber
- audioUrl, audioPublicId (Cloudinary)
- streamingLinks (JSON: Spotify, Apple Music, etc.)
- projectId (foreign key)
- timestamps

### News
- id (UUID)
- title
- content
- excerpt
- imageUrl, imagePublicId (Cloudinary)
- author
- isPublished (boolean)
- publishedAt
- timestamps

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin
- `POST /api/auth/login` - Login admin
- `GET /api/auth/profile` - Get admin profile (protected)

### Artists
- `GET /api/artists` - Get all artists (query: ?published=true)
- `GET /api/artists/:id` - Get artist by ID
- `POST /api/artists` - Create artist (admin only)
- `PUT /api/artists/:id` - Update artist (admin only)
- `DELETE /api/artists/:id` - Delete artist (admin only)
- `PATCH /api/artists/:id/publish` - Toggle publish status (admin only)

### Upload
- `POST /api/upload/single` - Upload single file (admin only)
- `POST /api/upload/multiple` - Upload multiple files (admin only)

## Socket.io Events

### Server → Client
- `artist:created` - New artist created
- `artist:updated` - Artist updated
- `artist:deleted` - Artist deleted
- `artist:published` - Artist publish status changed
- `project:created` - New project created
- `project:updated` - Project updated
- `news:created` - New news article created

### Client → Server
- `client:join` - Client joins public room
- `admin:authenticate` - Admin authenticates with JWT

## Environment Variables

### Server (.env)
```
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/bjarecordempire
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### Admin (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Setup Instructions

### 1. Server Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env with your configuration
npx prisma generate
npx prisma migrate dev
npm run dev
```

### 2. Client Setup
```bash
cd client
npm install
cp .env.example .env
npm run dev
```

### 3. Admin Setup
```bash
cd admin
npm install
cp .env.example .env
npm run dev
```

## Development Workflow

1. **Start PostgreSQL database**
2. **Start Server** (port 5000)
3. **Start Client** (port 3000)
4. **Start Admin** (port 3001)

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration for specific origins
- Admin-only routes with role-based access control
- Token validation on protected endpoints
- Secure file upload with validation

## Real-time Features

- Instant content updates from admin to public site
- Live notifications for new releases
- Real-time artist/project/news updates
- Socket.io rooms for admin and public separation

## File Upload Flow

1. Admin selects file in dashboard
2. File sent to `/api/upload/single` or `/api/upload/multiple`
3. Server validates file type and size
4. File uploaded to Cloudinary
5. Cloudinary URL and public ID returned
6. URL saved in database with content
7. Public ID used for deletion when content is removed

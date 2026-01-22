# Redux Toolkit & RTK Query Setup Guide

## Overview
BJA Record Empire now uses **Redux Toolkit** for state management and **RTK Query** for API calls, providing:
- Automatic caching and refetching
- Optimistic updates
- Normalized state management
- Built-in loading/error states
- TypeScript support

## Installation

### 1. Install Dependencies

**Admin:**
```bash
cd admin
npm install @reduxjs/toolkit react-redux
```

**Client:**
```bash
cd client
npm install @reduxjs/toolkit react-redux
```

**Server:**
```bash
cd server
npm install
```

## Admin Redux Structure

### Store Configuration
- **Location:** `admin/src/store/`
- **Main Store:** `index.ts` - Configures Redux store with RTK Query
- **Hooks:** `hooks.ts` - Typed hooks for useDispatch and useSelector

### API Slices (RTK Query)

#### Base API (`store/api/baseApi.ts`)
- Configures RTK Query with base URL
- Handles JWT token authentication
- Defines tag types for cache invalidation

#### Auth API (`store/api/authApi.ts`)
**Endpoints:**
- `useLoginMutation` - Admin login
- `useRegisterMutation` - Admin registration
- `useGetProfileQuery` - Get admin profile

**Usage Example:**
```tsx
import { useLoginMutation } from '../store/api/authApi';

function LoginPage() {
  const [login, { isLoading, error }] = useLoginMutation();

  const handleSubmit = async (credentials) => {
    try {
      const result = await login(credentials).unwrap();
      // Handle success
    } catch (err) {
      // Handle error
    }
  };
}
```

#### Artist API (`store/api/artistApi.ts`)
**Endpoints:**
- `useGetAllArtistsQuery` - Get all artists (with optional published filter)
- `useGetArtistByIdQuery` - Get single artist
- `useCreateArtistMutation` - Create new artist
- `useUpdateArtistMutation` - Update artist
- `useDeleteArtistMutation` - Delete artist
- `useTogglePublishArtistMutation` - Toggle publish status

**Usage Example:**
```tsx
import { useGetAllArtistsQuery, useCreateArtistMutation } from '../store/api/artistApi';

function ArtistsPage() {
  const { data, isLoading, error } = useGetAllArtistsQuery({ published: false });
  const [createArtist] = useCreateArtistMutation();

  const handleCreate = async (artistData) => {
    await createArtist(artistData).unwrap();
    // Artist list will auto-refresh due to cache invalidation
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading artists</div>;

  return (
    <div>
      {data?.artists.map(artist => (
        <div key={artist.id}>{artist.name}</div>
      ))}
    </div>
  );
}
```

#### Upload API (`store/api/uploadApi.ts`)
**Endpoints:**
- `useUploadSingleMutation` - Upload single file to Cloudinary
- `useUploadMultipleMutation` - Upload multiple files

**Usage Example:**
```tsx
import { useUploadSingleMutation } from '../store/api/uploadApi';

function ImageUpload() {
  const [uploadSingle, { isLoading }] = useUploadSingleMutation();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'artists');

    const result = await uploadSingle(formData).unwrap();
    console.log('Uploaded:', result.file.url);
  };
}
```

### State Slices

#### Auth Slice (`store/slices/authSlice.ts`)
Manages authentication state (admin user, token, isAuthenticated).

**Actions:**
- `setCredentials` - Store admin and token
- `logout` - Clear auth state

**Usage Example:**
```tsx
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCredentials, logout } from '../store/slices/authSlice';

function Header() {
  const dispatch = useAppDispatch();
  const { admin, isAuthenticated } = useAppSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
}
```

## Client Redux Structure

### Store Configuration
- **Location:** `client/src/store/`
- **Main Store:** `index.ts` - Configures Redux store
- **Hooks:** `hooks.ts` - Typed hooks

### API Slices

#### Artist API (`store/api/artistApi.ts`)
**Endpoints:**
- `useGetPublishedArtistsQuery` - Get all published artists
- `useGetArtistByIdQuery` - Get single artist

**Usage Example:**
```tsx
import { useGetPublishedArtistsQuery } from '../store/api/artistApi';

function ArtistsPage() {
  const { data, isLoading } = useGetPublishedArtistsQuery();

  return (
    <div>
      {data?.artists.map(artist => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
}
```

## RTK Query Features

### Automatic Caching
RTK Query automatically caches API responses. Subsequent requests for the same data will use the cache.

### Cache Invalidation
When you create, update, or delete data, RTK Query automatically refetches related data:

```tsx
// Creating an artist invalidates the artist list
const [createArtist] = useCreateArtistMutation();
await createArtist(data); // Artist list auto-refreshes
```

### Optimistic Updates
You can implement optimistic updates for instant UI feedback:

```tsx
const [updateArtist] = useUpdateArtistMutation();

// UI updates immediately, rolls back if request fails
await updateArtist({ id, data });
```

### Polling
Auto-refresh data at intervals:

```tsx
const { data } = useGetAllArtistsQuery(
  { published: true },
  { pollingInterval: 30000 } // Refresh every 30 seconds
);
```

### Conditional Fetching
Skip queries based on conditions:

```tsx
const { data } = useGetArtistByIdQuery(artistId, {
  skip: !artistId // Don't fetch if no ID
});
```

## Integration with Socket.io

For real-time updates, combine RTK Query with Socket.io:

```tsx
import { useEffect } from 'react';
import { socketService } from '../services/socket';
import { baseApi } from '../store/api/baseApi';
import { useAppDispatch } from '../store/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    socketService.connect();

    // Listen for real-time updates
    socketService.on('artist:created', () => {
      // Invalidate artist cache to refetch
      dispatch(baseApi.util.invalidateTags(['Artist']));
    });

    socketService.on('artist:updated', () => {
      dispatch(baseApi.util.invalidateTags(['Artist']));
    });

    return () => {
      socketService.disconnect();
    };
  }, [dispatch]);
}
```

## Best Practices

### 1. Use Typed Hooks
Always use `useAppDispatch` and `useAppSelector` instead of plain hooks:

```tsx
import { useAppDispatch, useAppSelector } from '../store/hooks';
```

### 2. Handle Loading States
```tsx
const { data, isLoading, isFetching, error } = useGetAllArtistsQuery();

if (isLoading) return <Spinner />;
if (error) return <ErrorMessage error={error} />;
```

### 3. Unwrap Mutations
Use `.unwrap()` to handle success/error in mutations:

```tsx
try {
  const result = await createArtist(data).unwrap();
  toast.success('Artist created!');
} catch (err) {
  toast.error(err.message);
}
```

### 4. Selective Refetching
Use `refetch` for manual updates:

```tsx
const { data, refetch } = useGetAllArtistsQuery();

<button onClick={() => refetch()}>Refresh</button>
```

### 5. Tag-Based Invalidation
Organize cache invalidation with tags:

```tsx
// In baseApi.ts
tagTypes: ['Artist', 'Project', 'Track', 'News']

// In mutations
invalidatesTags: [{ type: 'Artist', id: 'LIST' }]
providesTags: (result, error, id) => [{ type: 'Artist', id }]
```

## Migration from Old Services

### Before (Axios):
```tsx
import { artistService } from '../services/artistService';

const [artists, setArtists] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchArtists = async () => {
    try {
      const data = await artistService.getAll();
      setArtists(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  fetchArtists();
}, []);
```

### After (RTK Query):
```tsx
import { useGetAllArtistsQuery } from '../store/api/artistApi';

const { data, isLoading } = useGetAllArtistsQuery({ published: true });
// No manual state management needed!
```

## Environment Setup

Ensure `.env` files are configured:

**Admin `.env`:**
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

**Client `.env`:**
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Running the Application

1. **Start Server:**
   ```bash
   cd server
   npm run dev
   ```

2. **Start Client:**
   ```bash
   cd client
   npm run dev
   ```

3. **Start Admin:**
   ```bash
   cd admin
   npm run dev
   ```

## Debugging

### Redux DevTools
Install Redux DevTools browser extension to inspect:
- State changes
- API requests
- Cache updates
- Time-travel debugging

### RTK Query DevTools
View in Redux DevTools:
- API endpoints
- Cache entries
- Query status
- Mutation status

## Next Steps

1. Install dependencies in all folders
2. Create `.env` files from `.env.example`
3. Set up PostgreSQL database
4. Run Prisma migrations
5. Test API endpoints
6. Implement remaining features (Projects, Tracks, News)

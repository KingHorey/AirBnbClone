# AirBnb Clone Frontend

A modern, modular frontend implementation of an AirBnb clone built with React and TypeScript.

## Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn/UI
- **State Management:** React Query
- **Form Management:** React Hook Form + Zod
- **Authentication:** React Auth Kit
- **Icons:** Lucide React

## Project Structure

```
src/
├── app/                    # App-wide configurations and providers
│   ├── providers/         # React Query, Auth, and other providers
│   └── routes/           # Route configurations
│
├── components/
│   ├── ui/               # Shadcn UI components
│   └── shared/          # Reusable custom components across features
│
├── hooks/                # Custom React hooks
│   ├── api/             # API related hooks
│   └── ui/              # UI related hooks
│
├── lib/                  # Utility functions and configurations
│   ├── endpoints.ts             # API endpoints and axios config
│   ├── utils/           # Helper functions
│   ├── constants/       # App constants
│   └── types.ts           # TypeScript type definitions
│
└── assets/              # Images, icons, and other static assets

public/                  # Public assets and static files
```

## Key Features

- **Feature-First Organization**: Code is organized by feature rather than by type, making it easier to maintain and scale
- **Type Safety**: Comprehensive TypeScript integration
- **API Integration**: Centralized API handling with React Query
- **Form Management**: Standardized form handling with React Hook Form and Zod validation
- **Component Library**: Customizable UI components with Shadcn
- **Authentication**: Secure authentication flow with React Auth Kit

## Environment Setup

```env
# .env.example
VITE_API_BASE_URL=http://localhost:3000
VITE_AUTH_SECRET=your_auth_secret
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## Getting Started

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd airbnb-clone-frontend
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   # Update the .env with your configuration
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Development Guidelines

### Component Structure
```tsx
// Example component structure
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Card } from '@/components/ui/card'

interface Props {
  // Component props
}

export function FeatureComponent({ ...props }: Props) {
  // Component logic
  return (
    // JSX
  )
}
```

### API Integration
```typescript
// /lib/endpoints.ts
export const API_ENDPOINTS = {
  listings: '/api/listings',
  bookings: '/api/bookings',
  // ... other endpoints
}
```

### Form Validation
```typescript
// lib/types.ts
import { z } from 'zod'

export const createListingSchema = z.object({
  title: z.string().min(10),
  description: z.string().min(20),
  price: z.number().positive(),
  // ... other fields
})
```
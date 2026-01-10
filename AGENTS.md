# AGENTS.md - OpenFly Enterprise Landing Page

This document provides comprehensive guidelines for coding agents working on the OpenFly enterprise landing page project. It covers build commands, testing, linting, and detailed code style conventions.

## Build, Lint, and Test Commands

### Build Commands
```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

### Linting
```bash
# Run ESLint (includes Next.js core web vitals and TypeScript rules)
npm run lint

# Fix auto-fixable linting issues
npm run lint -- --fix
```

### Testing
**Note:** This project does not currently have a test framework configured. When adding tests:

```bash
# Install testing framework (when implemented)
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Run all tests (when implemented)
npm test

# Run single test file (when implemented)
npm test -- path/to/test.tsx

# Run tests in watch mode (when implemented)
npm run test:watch
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode**: Enabled - all TypeScript strict checks must pass
- **Target**: ES2017
- **JSX**: React JSX transform (not classic)
- **Module resolution**: Bundler (supports path mapping)
- **Path aliases**: Use `@/` for root directory imports

### Import Organization
```typescript
// 1. React imports
import React from 'react';

// 2. Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// 3. Third-party libraries (alphabetical)
import { motion } from 'motion/react';
import { Calendar, Heart } from 'lucide-react';

// 4. Local imports (use @/ alias)
import Header from '@/src/components/layout/Header/Header';
import ThemeToggle from '@/src/shared/ui/ThemeToggle';

// 5. Type imports
import type { Metadata } from 'next';
```

### Component Structure

#### Client Components
```typescript
"use client";

import { useState } from 'react';
import type { FC } from 'react';

interface ComponentProps {
  title: string;
  onAction?: () => void;
}

const MyComponent: FC<ComponentProps> = ({ title, onAction }) => {
  const [state, setState] = useState<boolean>(false);

  return (
    <div className="component-classes">
      {/* Component JSX */}
    </div>
  );
};

export default MyComponent;
```

#### Server Components
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
};

export default function Page() {
  return (
    <main>
      {/* Server component content */}
    </main>
  );
}
```

### Naming Conventions

#### Files and Directories
- **Components**: PascalCase (`Header.tsx`, `ThemeToggle.tsx`)
- **Directories**: PascalCase for component folders (`Header/`, `Footer/`)
- **Utilities**: camelCase (`utils/`, `helpers/`)
- **Types**: PascalCase with `T` prefix (`TNavLink`, `TComponentProps`)

#### Variables and Functions
- **Constants**: UPPER_SNAKE_CASE for true constants
- **Variables**: camelCase
- **Functions**: camelCase
- **Components**: PascalCase
- **Props**: camelCase
- **Event handlers**: `handle` + PascalCase (`handleClick`, `handleSubmit`)

### TypeScript Types

```typescript
// Interface for component props
interface ComponentProps {
  id: string;
  title: string;
  isActive?: boolean;
  onClick: (id: string) => void;
}

// Type for data structures
type TNavLink = {
  id: string;
  url: string;
  text: string;
};

// Generic types
type ApiResponse<T> = {
  data: T;
  error?: string;
  loading: boolean;
};
```

### Styling Conventions

#### Tailwind CSS + DaisyUI
- Use DaisyUI components when available (`btn`, `card`, `navbar`, etc.)
- Combine with Tailwind utilities for customization
- Follow mobile-first responsive design (`md:`, `lg:`)
- Use semantic color classes (`text-primary`, `bg-base-100`)

#### CSS Classes Structure
```typescript
// Component with responsive design
<div className="card bg-base-100 shadow-xl p-6 md:p-8">

// Interactive elements
<button className="btn btn-primary btn-lg hover:btn-secondary transition-colors">

// Layout utilities
<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
```

### Error Handling
```typescript
// Async operations
try {
  const result = await fetchData();
  // Handle success
} catch (error) {
  console.error('Failed to fetch data:', error);
  // Handle error state
}

// Conditional rendering with error states
{error ? (
  <div className="alert alert-error">
    <span>{error.message}</span>
  </div>
) : (
  <div>{/* Normal content */}</div>
)}
```

### Accessibility
- Always include `aria-label` for icon buttons
- Use semantic HTML elements
- Ensure keyboard navigation works
- Provide alt text for images
- Maintain proper heading hierarchy

### Animation and Motion
```typescript
import { motion } from 'motion/react';

// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Animated content */}
</motion.div>

// Stagger animations
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {/* Item content */}
  </motion.div>
))}
```

### File Organization

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer)
│   ├── Projects/        # Project-specific components
│   │   ├── DokkerSpace/
│   │   └── WeTrack/
│   └── shared/          # Reusable components
│       └── ui/          # Basic UI components
├── shared/
│   └── ui/             # Shared UI utilities
└── types/              # Global type definitions (when needed)
```

### Git Workflow
- Follow conventional commit messages
- Use feature branches for new work
- Run linting before committing
- Ensure builds pass in CI/CD

### Performance Considerations
- Use Next.js Image component for images
- Implement lazy loading where appropriate
- Optimize bundle size by code splitting
- Use React.memo for expensive components when needed
- Prefer CSS animations over JavaScript when possible

## Development Environment Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Run linting: `npm run lint`
4. Build for production: `npm run build`

## Code Quality Checklist

- [ ] TypeScript strict mode passes
- [ ] ESLint passes with no errors
- [ ] All imports use proper aliases (@/)
- [ ] Components have proper TypeScript interfaces
- [ ] Accessibility attributes included where needed
- [ ] Responsive design implemented
- [ ] DaisyUI components used appropriately
- [ ] Proper error handling implemented
- [ ] No console.log statements in production code</content>
<parameter name="filePath">AGENTS.md
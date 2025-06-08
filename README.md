# REMWaste Task (Skip Selection Page Redesign)

## Description

This is a redesign of the skip selection page for the REMWaste task.

## Tech Stack

- **React**
- **TypeScript**
- **Vite**: A modern build tool that offers a faster and leaner development experience with features like:
  - Instant server start
  - Hot Module Replacement (HMR)
  - Optimized builds
  - Out-of-the-box TypeScript support
- **Tailwind CSS**: A utility-first CSS framework that enables:
  - Rapid UI development with pre-built utility classes
  - Responsive design made simple
  - Consistent spacing and sizing
  - Easy dark mode implementation
  - Customizable design system
- **Shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS, providing:
  - Accessible components out of the box
  - Customizable design system
  - Dark mode support
  - Consistent styling across components

## Design System

The project implements a comprehensive design system with:

### Color System
The project uses a sophisticated color system with both light and dark themes:

#### 🎨 Light Theme Colors

| Name        | HSL                      | Preview |
|-------------|--------------------------|---------|
| Primary     | `hsl(222.2, 47.4%, 11.2%)` | <span style="display:inline-block;width:20px;height:20px;background:hsl(222.2, 47.4%, 11.2%);border-radius:4px;"></span> |
| Secondary   | `hsl(210, 40%, 96.1%)`     | <span style="display:inline-block;width:20px;height:20px;background:hsl(210, 40%, 96.1%);border-radius:4px;border:1px solid #ccc;"></span> |
| Accent      | `hsl(210, 40%, 96.1%)`     | <span style="display:inline-block;width:20px;height:20px;background:hsl(210, 40%, 96.1%);border-radius:4px;border:1px solid #ccc;"></span> |
| Background  | `hsl(0, 0%, 100%)`         | <span style="display:inline-block;width:20px;height:20px;background:hsl(0, 0%, 100%);border-radius:4px;border:1px solid #ccc;"></span> |
| Foreground  | `hsl(222.2, 84%, 4.9%)`    | <span style="display:inline-block;width:20px;height:20px;background:hsl(222.2, 84%, 4.9%);border-radius:4px;"></span> |
| Muted       | `hsl(210, 40%, 96.1%)`     | <span style="display:inline-block;width:20px;height:20px;background:hsl(210, 40%, 96.1%);border-radius:4px;border:1px solid #ccc;"></span> |
| Destructive | `hsl(0, 84.2%, 60.2%)`     | <span style="display:inline-block;width:20px;height:20px;background:hsl(0, 84.2%, 60.2%);border-radius:4px;"></span> |

#### 🌙 Dark Theme Colors

| Name        | HSL                      | Preview |
|-------------|--------------------------|---------|
| Primary     | `hsl(210, 40%, 98%)`       | <span style="display:inline-block;width:20px;height:20px;background:hsl(210, 40%, 98%);border-radius:4px;border:1px solid #ccc;"></span> |
| Secondary   | `hsl(217.2, 32.6%, 17.5%)` | <span style="display:inline-block;width:20px;height:20px;background:hsl(217.2, 32.6%, 17.5%);border-radius:4px;"></span> |
| Accent      | `hsl(217.2, 32.6%, 17.5%)` | <span style="display:inline-block;width:20px;height:20px;background:hsl(217.2, 32.6%, 17.5%);border-radius:4px;"></span> |
| Background  | `hsl(222.2, 84%, 4.9%)`    | <span style="display:inline-block;width:20px;height:20px;background:hsl(222.2, 84%, 4.9%);border-radius:4px;"></span> |
| Foreground  | `hsl(210, 40%, 98%)`       | <span style="display:inline-block;width:20px;height:20px;background:hsl(210, 40%, 98%);border-radius:4px;border:1px solid #ccc;"></span> |
| Muted       | `hsl(217.2, 32.6%, 17.5%)` | <span style="display:inline-block;width:20px;height:20px;background:hsl(217.2, 32.6%, 17.5%);border-radius:4px;"></span> |
| Destructive | `hsl(0, 62.8%, 30.6%)`     | <span style="display:inline-block;width:20px;height:20px;background:hsl(0, 62.8%, 30.6%);border-radius:4px;"></span> |


### Additional Features
- **Dark Mode**: Full dark mode support with carefully selected color palettes for both light and dark themes
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Image Handling
After inspecting the original page that is being redesigned, I discovered the image URL pattern and implemented a consistent approach:

- **Base URL**: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes`
- **Image Pattern**: `/{size}-yarder-skip.jpg`
- **Example**: `https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg`

Example implementation:
```typescript
// src/utils/image/create-image-link.ts
export const createImageLink = (size: number) => {
    return import.meta.env.VITE_IMAGES_BASE_URL + `/${size}` + "-yarder-skip.jpg";
};
```

### Performance Optimization
The application implements lazy loading for images to improve performance:

```typescript
// src/components/SkipCard.tsx
<img
    src={createImageLink(skipItem.size)}
    alt={`${skipItem.size} skip`}
    className="w-full h-48 object-cover"
    loading="lazy"
/>
```

### Loading State & User Experience
To enhance the user experience during data fetching, the application implements a sophisticated loading state:

1. **Loading Component**: A custom `SkipSelectionLoader` component that mimics the layout of the actual content, providing a smooth transition between loading and loaded states.

2. **Intentional Delay**: Since the API response is cached and returns very quickly, a small delay (2 seconds) is added to ensure users can perceive the loading state and provide a more natural experience:

```typescript
// src/pages/SkipSelection.tsx
useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
}, []);
```

This approach prevents the jarring effect of content appearing too quickly and provides users with visual feedback that their request is being processed.

### Data Types
Through careful analysis of the API response data, I've defined comprehensive TypeScript types to ensure type safety and better development experience. The main skip item type is defined as:

```typescript
// src/types/skip-item.type.ts
export type SkipItem = {
    id: number;
    size: number;
    hire_period_days: number;
    transport_cost: number | null;
    per_tonne_cost: number | null;
    price_before_vat: number;
    vat: number;
    postcode: string;
    area: string;
    forbidden: boolean;
    created_at: string;
    updated_at: string;
    allowed_on_road: boolean;
    allows_heavy_waste: boolean;
};
```

This type definition was derived from analyzing the API response structure, ensuring all fields are properly typed and documented.
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

## Project Setup and Running

### Prerequisites
- Node.js version 20.x (required for the latest dependencies)
- npm or yarn package manager

### Installation Steps

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Environment Setup:
   - Copy `.env.example` to `.env`
   - Use the exact environment variables from `.env.example`:
     ```
     VITE_IMAGES_BASE_URL=https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes
VITE_API_BASE_URL=https://app.wewantwaste.co.uk/api
     ```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080` by default.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure
```
src/
├── api/                    # API integration
│   ├── axiosConfig.ts     # Axios instance configuration
│   └── services/          # API services
│       └── skipItems.service.ts
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── SkipCard.tsx      # Skip item card component
│   ├── SkipSelectionDisclaimer.tsx  # Skip selection disclaimer component
│   ├── SkipSelectionFooter.tsx  # Skip selection footer component
│   ├── SkipSelectionHeader.tsx  # Skip selection header component
│   ├── ProgressSteps.tsx  # Progress steps component
│   └── SkipSelectionLoader.tsx  # Loading state component
├── context/              # React Context providers
│   └── StepContext.tsx   # Step navigation context
├── pages/                # Page components
│   └── SkipSelection.tsx # Main skip selection page
├── types/                # TypeScript type definitions
│   └── skip-item.type.ts
├── utils/                # Utility functions
│   └── image/           # Image handling utilities
│       └── create-image-link.ts
├── App.tsx              # Root component
├── index.css            # Global styles
└── main.tsx            # Application entry point
```

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
- **Dark Mode**: While implemented for demonstration purposes, the dark mode feature is overkill for this specific task. In a real-world scenario, theme implementation would typically be handled at the application level rather than individual pages, as it's a global concern that affects the entire user experience. For this task, a single theme would have been sufficient.
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

### API Integration
The application uses Axios for API integration with a simple configuration:

```typescript
// src/api/axiosConfig.ts
import axios from "axios";

const axiosConfig = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosConfig;
```

The skip items service is implemented with a basic structure:

```typescript
// src/api/services/skipItems.service.ts
import { SkipItem } from "@/types";
import axiosConfig from "../axiosConfig";

const SKIP_ITEMS_URL = "/skips";
export class SkipItemsService {
    static async getSkipItems(): Promise<SkipItem[]> {
        const response = await axiosConfig.get(`${SKIP_ITEMS_URL}/by-location?postcode=NR32&area=Lowestoft`);
        return response.data;
    }
}
```

Note: In a real-world scenario, the service would typically be more generalized with parameters for postcode and area, but since this task only uses a single endpoint with fixed parameters, the implementation is kept simple.

### Potential Enhancements

#### Data Loading and Pagination
For larger datasets, this page could be enhanced with pagination or infinite scroll to improve user experience. This would involve:

1. **API Support**: The backend would need to support pagination parameters (e.g., `page`, `limit`, `offset`)
2. **Data Chunking**: Loading data in smaller chunks to improve initial load time
3. **Infinite Scroll**: Implementing infinite scroll for a smoother user experience
4. **Virtualization**: Using virtual lists for better performance with large datasets

Since the current API doesn't support pagination and the dataset is relatively small for this task, these optimizations are not implemented. These features would be valuable additions for handling larger datasets in the future.

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

### State Management
The application uses React's Context API for managing step navigation state, which is a perfect fit for this use case because:

1. **Simple State Requirements**: The step navigation logic is straightforward and doesn't require complex state management like Redux.
2. **Component Tree Structure**: The step state is primarily used by closely related components in a parent-child relationship.
3. **Performance Considerations**: Context is optimized for low-frequency updates like step changes.

#### Step Context Implementation
```typescript
// src/context/StepContext.tsx
export type Step = {
  id: string;
  label: string;
  path: string;
};

export const STEPS: Step[] = [
  { id: 'postcode', label: 'Postcode', path: '/postcode' },
  { id: 'waste-type', label: 'Waste Type', path: '/waste-type' },
  { id: 'select-skip', label: 'Select Skip', path: '/select-skip' },
  { id: 'permit-check', label: 'Permit Check', path: '/permit-check' },
  { id: 'choose-date', label: 'Choose Date', path: '/choose-date' },
  { id: 'payment', label: 'Payment', path: '/payment' },
];

interface StepContextType {
  currentStep: Step;
  completedSteps: string[];
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  markStepAsCompleted: (stepId: string) => void;
}
```

The context provides:
- Current step tracking
- Completed steps management
- Navigation methods (next/previous)
- Step completion marking

#### Usage in Components
```typescript
// Example usage in a component
const { currentStep, goToNextStep, goToPreviousStep } = useStep();
```

#### Benefits of Using Context
1. **Simplified State Management**: No need for complex Redux setup or middleware
2. **Type Safety**: Full TypeScript support with proper type definitions
3. **Easy Testing**: Components can be easily tested with mock context values
4. **Performance**: Optimized for the specific use case of step navigation
5. **Maintainability**: Centralized step logic makes it easy to modify navigation behavior

#### Why Not Redux?
While Redux is a powerful state management solution, it would be overkill for this application/task because:
1. The state updates are infrequent (only during step changes)
2. The state structure is simple and doesn't require complex reducers
3. There's no need for middleware or complex side effects
4. The component tree is relatively shallow
5. The state is primarily used for navigation between related pages

This approach aligns with React's philosophy of using the simplest solution that meets the requirements, making the code more maintainable and easier to understand.
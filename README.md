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
# React + TypeScript + Vite + shadcn/ui + Tailwind CSS

A modern React application built with TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Features

- ⚛️ **React 18** with TypeScript
- ⚡ **Vite** for fast development and building
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **shadcn/ui** for beautiful, accessible components
- 🌙 **Dark mode** support
- 📱 **Responsive** design

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd scrapper-for-teams
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── index.css         # Global styles with Tailwind
└── main.tsx          # Application entry point
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - CSS framework
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives

## Customization

### Adding New Components

You can add more shadcn/ui components by:

1. Installing the required dependencies
2. Creating the component file in `src/components/ui/`
3. Importing and using it in your application

### Styling

The application uses Tailwind CSS with custom CSS variables for theming. You can customize the theme by modifying the CSS variables in `src/index.css`.

## License

MIT License - see LICENSE file for details

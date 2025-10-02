# Modular Dashboard Components

This directory contains a modular, reusable component structure for the sentiment tracking dashboard.

## Structure

```
src/
├── components/
│   ├── dashboard/          # Main dashboard components
│   │   ├── DashboardHeader.tsx
│   │   ├── DashboardGrid.tsx
│   │   └── RecentPosts.tsx
│   ├── charts/             # Chart and visualization components
│   │   ├── SentimentGauge.tsx
│   │   ├── SentimentTrendChart.tsx
│   │   ├── TopicBreakdown.tsx
│   │   └── TrendingKeywords.tsx
│   ├── filters/            # Filter and control components
│   │   ├── TimeRangeFilter.tsx
│   │   └── LLMFilter.tsx
│   └── ui/                 # Base UI components (shadcn/ui)
├── hooks/                  # Custom React hooks
│   └── useDashboard.ts
├── types/                  # TypeScript type definitions
│   └── index.ts
├── data/                   # Mock data and constants
│   └── mockData.ts
└── utils/                  # Utility functions
    └── sentiment.ts
```

## Component Categories

### Dashboard Components

- **DashboardHeader**: Main header with title, filters, and controls
- **DashboardGrid**: Main layout grid that orchestrates all dashboard sections
- **RecentPosts**: Displays recent posts and comments

### Chart Components

- **SentimentGauge**: Circular gauge showing overall sentiment percentage
- **SentimentTrendChart**: Line chart showing sentiment trends over time
- **TopicBreakdown**: Donut chart and list showing topic analysis
- **TrendingKeywords**: Horizontal bar chart showing keyword sentiment

### Filter Components

- **TimeRangeFilter**: Time period selection buttons
- **LLMFilter**: LLM selection toggle buttons

## Usage

```tsx
import { DashboardHeader, DashboardGrid } from "./components";
import { useDashboard } from "./hooks/useDashboard";

function App() {
  const dashboardData = useDashboard();

  return (
    <div>
      <DashboardHeader {...headerProps} />
      <DashboardGrid {...gridProps} />
    </div>
  );
}
```

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused in different contexts
3. **Maintainability**: Easy to find and update specific functionality
4. **Testability**: Each component can be tested in isolation
5. **Scalability**: Easy to add new components or modify existing ones
6. **Type Safety**: Full TypeScript support with proper type definitions

<<<<<<< HEAD
# Sales Dashboard

A modern, interactive sales analytics dashboard built with React, TypeScript, and Tailwind CSS. View and analyze sales data across multiple years with various chart types and filtering options.

## 🚀 Features

- **Multi-Year Data Visualization**: View sales data for 2022, 2023, and 2024
- **Multiple Chart Types**: Switch between Bar, Line, and Pie charts
- **Custom Filtering**: Set sales threshold to filter data points
- **Key Metrics**: Total Revenue, Orders, Profit, and Average Order Value
- **Year-over-Year Trends**: Visual indicators showing growth/decline
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Atomic Design Structure**: Components organized by atoms, molecules, organisms, and templates

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Recharts** - Chart library
- **Lucide React** - Icons

## 📁 Project Structure (Atomic Design)

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── ChartTypeButton.tsx
│   │   ├── FilterInput.tsx
│   │   ├── StatCard.tsx
│   │   └── YearSelector.tsx
│   ├── molecules/       # Combinations of atoms
│   │   ├── ChartCard.tsx
│   │   └── StatsGrid.tsx
│   ├── organisms/       # Complex components
│   │   ├── DashboardHeader.tsx
│   │   ├── SalesBarChart.tsx
│   │   ├── SalesLineChart.tsx
│   │   └── SalesPieChart.tsx
│   └── templates/       # Page layouts
│       └── DashboardLayout.tsx
├── data/
│   └── salesData.ts     # Mock sales data (Kaggle-style retail data)
├── pages/
│   ├── Dashboard.tsx    # Main dashboard page
│   └── Index.tsx        # Entry point
└── index.css            # Design system tokens
```

## 🎨 Design System

The project uses a comprehensive design system defined in `index.css` with:

- **Color Tokens**: Primary (teal), secondary, accent colors
- **Chart Colors**: 5 distinct colors for data visualization
- **Typography**: Plus Jakarta Sans (UI) + JetBrains Mono (code)
- **Shadows & Effects**: Glow effects, card shadows
- **Animations**: Fade-in, slide-up, scale-in transitions

## 📊 Data Structure

Sales data includes:
- Monthly breakdowns with sales, orders, and profit for 2022-2024
- Year-over-year comparisons with trend indicators
- Category distribution (Electronics, Clothing, Home & Garden, Sports, Others)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sales-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Build for Production

```bash
npm run build
```

## 🔧 Usage

1. **Select Year**: Click year buttons (2022, 2023, 2024) to view different periods
2. **Change Chart Type**: Use Bar, Line, or Pie buttons to switch visualization
3. **Filter Data**: Enter a minimum sales value to filter months below threshold
4. **View Metrics**: Top cards show key KPIs with YoY trends

## 📝 What I Built

1. **Atomic Component Architecture**: Organized components into atoms (buttons, inputs), molecules (cards, grids), organisms (charts, headers), and templates (layouts)

2. **Interactive Charts**: Implemented three chart types using Recharts with custom tooltips and animations

3. **Mock Sales Data**: Created realistic sales data inspired by Kaggle retail datasets with monthly breakdowns and category distributions

4. **Custom Filtering**: Added threshold input to filter sales data in real-time

5. **Responsive Design**: Built mobile-first layout with Tailwind CSS and glass-morphism effects

6. **Design System**: Defined comprehensive CSS variables for colors, shadows, and animations

## 🔮 Future Enhancements

- [ ] Real API integration (replace mock data with fetch calls)
- [ ] Export data to CSV/PDF
- [ ] Date range picker for custom periods
- [ ] Comparison mode (overlay multiple years)
- [ ] More chart types (Area, Scatter, Radar)

## 📄 License

MIT License
=======
# sales_dashboard
>>>>>>> 3cb732b623281af90f51ffebff247d109e0fb973

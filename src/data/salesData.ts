// Mock sales data inspired by Kaggle retail datasets
export interface SalesRecord {
  month: string;
  sales: number;
  orders: number;
  profit: number;
}

export interface YearlySalesData {
  year: number;
  data: SalesRecord[];
  totalSales: number;
  totalOrders: number;
  totalProfit: number;
}

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Sales data for 2022
const sales2022: SalesRecord[] = [
  { month: "Jan", sales: 45200, orders: 312, profit: 12560 },
  { month: "Feb", sales: 52300, orders: 345, profit: 14540 },
  { month: "Mar", sales: 48900, orders: 298, profit: 13210 },
  { month: "Apr", sales: 61200, orders: 421, profit: 17850 },
  { month: "May", sales: 55800, orders: 389, profit: 15230 },
  { month: "Jun", sales: 67400, orders: 456, profit: 19870 },
  { month: "Jul", sales: 72100, orders: 498, profit: 21340 },
  { month: "Aug", sales: 69800, orders: 478, profit: 20120 },
  { month: "Sep", sales: 58900, orders: 401, profit: 16890 },
  { month: "Oct", sales: 75600, orders: 512, profit: 22340 },
  { month: "Nov", sales: 89200, orders: 623, profit: 26780 },
  { month: "Dec", sales: 102400, orders: 745, profit: 31250 },
];

// Sales data for 2023
const sales2023: SalesRecord[] = [
  { month: "Jan", sales: 58700, orders: 398, profit: 16450 },
  { month: "Feb", sales: 62400, orders: 425, profit: 17890 },
  { month: "Mar", sales: 71200, orders: 489, profit: 20560 },
  { month: "Apr", sales: 68900, orders: 467, profit: 19780 },
  { month: "May", sales: 75600, orders: 523, profit: 22140 },
  { month: "Jun", sales: 82300, orders: 567, profit: 24670 },
  { month: "Jul", sales: 91200, orders: 634, profit: 27890 },
  { month: "Aug", sales: 87500, orders: 598, profit: 26120 },
  { month: "Sep", sales: 79800, orders: 545, profit: 23450 },
  { month: "Oct", sales: 94600, orders: 651, profit: 28970 },
  { month: "Nov", sales: 112300, orders: 789, profit: 34560 },
  { month: "Dec", sales: 128900, orders: 912, profit: 39870 },
];

// Sales data for 2024
const sales2024: SalesRecord[] = [
  { month: "Jan", sales: 72400, orders: 498, profit: 21560 },
  { month: "Feb", sales: 78900, orders: 534, profit: 23670 },
  { month: "Mar", sales: 85600, orders: 589, profit: 25890 },
  { month: "Apr", sales: 92300, orders: 623, profit: 28120 },
  { month: "May", sales: 98700, orders: 678, profit: 30450 },
  { month: "Jun", sales: 105200, orders: 723, profit: 32780 },
  { month: "Jul", sales: 118400, orders: 812, profit: 36890 },
  { month: "Aug", sales: 112800, orders: 778, profit: 34560 },
  { month: "Sep", sales: 108900, orders: 745, profit: 33120 },
  { month: "Oct", sales: 125600, orders: 867, profit: 39450 },
  { month: "Nov", sales: 142300, orders: 978, profit: 44890 },
  { month: "Dec", sales: 158700, orders: 1089, profit: 49560 },
];

const calculateTotals = (data: SalesRecord[]) => ({
  totalSales: data.reduce((sum, record) => sum + record.sales, 0),
  totalOrders: data.reduce((sum, record) => sum + record.orders, 0),
  totalProfit: data.reduce((sum, record) => sum + record.profit, 0),
});

export const yearlySalesData: YearlySalesData[] = [
  { year: 2022, data: sales2022, ...calculateTotals(sales2022) },
  { year: 2023, data: sales2023, ...calculateTotals(sales2023) },
  { year: 2024, data: sales2024, ...calculateTotals(sales2024) },
];

export const getAllYears = () => yearlySalesData.map(y => y.year);

export const getDataByYear = (year: number) => 
  yearlySalesData.find(y => y.year === year);

export const filterByThreshold = (data: SalesRecord[], threshold: number) =>
  data.filter(record => record.sales >= threshold);

export const getCategoryBreakdown = (year: number) => {
  const categories = [
    { name: "Electronics", value: 35, color: "hsl(var(--chart-1))" },
    { name: "Clothing", value: 25, color: "hsl(var(--chart-2))" },
    { name: "Home & Garden", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Sports", value: 12, color: "hsl(var(--chart-4))" },
    { name: "Others", value: 8, color: "hsl(var(--chart-5))" },
  ];
  
  // Slight variation per year
  const multiplier = year === 2024 ? 1.1 : year === 2023 ? 1.0 : 0.9;
  return categories.map(cat => ({
    ...cat,
    value: Math.round(cat.value * multiplier * (0.9 + Math.random() * 0.2))
  }));
};

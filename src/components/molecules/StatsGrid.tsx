import { DollarSign, ShoppingCart, TrendingUp, Package } from "lucide-react";
import StatCard from "../atoms/StatCard";
import { YearlySalesData } from "@/data/salesData";

interface StatsGridProps {
  data: YearlySalesData;
  previousYearData?: YearlySalesData;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

const calculateTrend = (current: number, previous: number) => {
  if (!previous) return undefined;
  const change = ((current - previous) / previous) * 100;
  return {
    value: Math.round(change * 10) / 10,
    isPositive: change > 0,
  };
};

const StatsGrid = ({ data, previousYearData }: StatsGridProps) => {
  const avgOrderValue = data.totalSales / data.totalOrders;
  const prevAvgOrderValue = previousYearData 
    ? previousYearData.totalSales / previousYearData.totalOrders 
    : 0;

  const stats = [
    {
      title: "Total Revenue",
      value: formatCurrency(data.totalSales),
      icon: DollarSign,
      trend: calculateTrend(data.totalSales, previousYearData?.totalSales || 0),
    },
    {
      title: "Total Orders",
      value: formatNumber(data.totalOrders),
      icon: ShoppingCart,
      trend: calculateTrend(data.totalOrders, previousYearData?.totalOrders || 0),
    },
    {
      title: "Total Profit",
      value: formatCurrency(data.totalProfit),
      icon: TrendingUp,
      trend: calculateTrend(data.totalProfit, previousYearData?.totalProfit || 0),
    },
    {
      title: "Avg Order Value",
      value: formatCurrency(avgOrderValue),
      icon: Package,
      trend: calculateTrend(avgOrderValue, prevAvgOrderValue),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={stat.title}
          {...stat}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

export default StatsGrid;

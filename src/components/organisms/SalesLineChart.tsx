import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { SalesRecord } from "@/data/salesData";

interface SalesLineChartProps {
  data: SalesRecord[];
}

const formatCurrency = (value: number) => `$${(value / 1000).toFixed(0)}K`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg p-3 border border-border">
        <p className="font-semibold text-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SalesLineChart = ({ data }: SalesLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          tickFormatter={formatCurrency}
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="sales" 
          name="Sales"
          stroke="hsl(var(--chart-1))" 
          strokeWidth={3}
          dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2 }}
          activeDot={{ r: 6, fill: "hsl(var(--chart-1))" }}
        />
        <Line 
          type="monotone" 
          dataKey="profit" 
          name="Profit"
          stroke="hsl(var(--chart-2))" 
          strokeWidth={3}
          dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2 }}
          activeDot={{ r: 6, fill: "hsl(var(--chart-2))" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;

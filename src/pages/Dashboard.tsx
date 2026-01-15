import { useState, useMemo } from "react";
import { BarChart2, LineChart, PieChart } from "lucide-react";

import DashboardLayout from "@/components/templates/DashboardLayout";
import DashboardHeader from "@/components/organisms/DashboardHeader";
import StatsGrid from "@/components/molecules/StatsGrid";
import ChartCard from "@/components/molecules/ChartCard";
import ChartTypeButton from "@/components/atoms/ChartTypeButton";

import SalesBarChart from "@/components/organisms/SalesBarChart";
import SalesLineChart from "@/components/organisms/SalesLineChart";
import SalesPieChart from "@/components/organisms/SalesPieChart";

import {
  getAllYears,
  getDataByYear,
  filterByThreshold,
  getCategoryBreakdown,
} from "@/data/salesData";

type ChartType = "bar" | "line" | "pie";

const Dashboard = () => {
  const years = getAllYears();
  const [selectedYear, setSelectedYear] = useState(2024);
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState(0);

  const currentData = useMemo(() => getDataByYear(selectedYear), [selectedYear]);
  const previousData = useMemo(() => getDataByYear(selectedYear - 1), [selectedYear]);
  
  const filteredData = useMemo(() => {
    if (!currentData) return [];
    return filterByThreshold(currentData.data, threshold);
  }, [currentData, threshold]);

  const categoryData = useMemo(() => getCategoryBreakdown(selectedYear), [selectedYear]);

  if (!currentData) return null;

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return <SalesLineChart data={filteredData} />;
      case "pie":
        return <SalesPieChart data={categoryData} />;
      default:
        return <SalesBarChart data={filteredData} />;
    }
  };

  const chartTypes = [
    { type: "bar" as ChartType, icon: BarChart2, label: "Bar" },
    { type: "line" as ChartType, icon: LineChart, label: "Line" },
    { type: "pie" as ChartType, icon: PieChart, label: "Pie" },
  ];

  const handleResetFilters = () => {
  setThreshold(0);
};

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardHeader
          years={years}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          threshold={threshold}
          onThresholdChange={setThreshold}
        />

        <StatsGrid data={currentData} previousYearData={previousData} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartCard
              title="Sales Overview"
              description={`Monthly ${chartType === "pie" ? "category distribution" : "sales and profit"} for ${selectedYear}`}
              delay={400}
              actions={
                <div className="flex gap-2">
                  {chartTypes.map(({ type, icon, label }) => (
                    <ChartTypeButton
                      key={type}
                      icon={icon}
                      label={label}
                      isActive={chartType === type}
                      onClick={() => setChartType(type)}
                    />
                  ))}
                </div>
              }
            >
              {renderChart()}
              {threshold > 0 && (
    <div className="mt-4 flex justify-end">
      <button
        onClick={handleResetFilters}
        className="text-sm px-3 py-1 rounded-md bg-muted hover:bg-muted/80 transition"
      >
        Reset Filter
      </button>
    </div>
  )}
            </ChartCard>
          </div>

          <div className="lg:col-span-1">
            <ChartCard
              title="Category Breakdown"
              description="Sales distribution by product category"
              delay={500}
            >
              <SalesPieChart data={categoryData} />
            </ChartCard>
          </div>
        </div>

        


      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

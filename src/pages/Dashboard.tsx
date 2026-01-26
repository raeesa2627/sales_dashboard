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

  // threshold input value
  const [threshold, setThreshold] = useState(0);

  // applied threshold (Apply button ke baad)
  const [appliedThreshold, setAppliedThreshold] = useState(0);

  const currentData = useMemo(
    () => getDataByYear(selectedYear),
    [selectedYear]
  );

  const previousData = useMemo(
    () => getDataByYear(selectedYear - 1),
    [selectedYear]
  );

  // filter ONLY based on appliedThreshold
  const filteredData = useMemo(() => {
    if (!currentData) return [];
    return filterByThreshold(currentData.data, appliedThreshold);
  }, [currentData, appliedThreshold]);

  const categoryData = useMemo(
    () => getCategoryBreakdown(selectedYear),
    [selectedYear]
  );

  if (!currentData) return null;

  // Apply button
  const handleApplyFilter = () => {
    setAppliedThreshold(threshold);
  };

  // Reset button
  const handleResetFilters = () => {
    setThreshold(0);
    setAppliedThreshold(0);
  };

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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header with threshold input */}
        <DashboardHeader
          years={years}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          threshold={threshold}
          onThresholdChange={setThreshold}
        />

        <StatsGrid
          data={currentData}
          previousYearData={previousData}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartCard
              title="Sales Overview"
              description={`Monthly ${
                chartType === "pie"
                  ? "category distribution"
                  : "sales and profit"
              } for ${selectedYear}`}
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
              {/* ✅ OPTION 2: Badge showing applied threshold */}
              {appliedThreshold > 0 && (
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                    Min Sales ≥ ${appliedThreshold}
                  </span>
                </div>
              )}

              {renderChart()}

              {/* Apply + Reset buttons */}
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={handleApplyFilter}
                  className="px-4 py-2 text-sm rounded-md bg-primary text-white hover:bg-primary/90 transition"
                >
                  Apply Filter
                </button>

                {appliedThreshold > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="px-4 py-2 text-sm rounded-md bg-muted hover:bg-muted/80 transition"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
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

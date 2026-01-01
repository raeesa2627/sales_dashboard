import { BarChart3 } from "lucide-react";
import YearSelector from "../atoms/YearSelector";
import FilterInput from "../atoms/FilterInput";

interface DashboardHeaderProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
}

const DashboardHeader = ({
  years,
  selectedYear,
  onYearChange,
  threshold,
  onThresholdChange,
}: DashboardHeaderProps) => {
  return (
    <header className="animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 glow">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Sales Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Analyze sales performance across years
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <YearSelector
            years={years}
            selectedYear={selectedYear}
            onYearChange={onYearChange}
          />
          <div className="w-full sm:w-64">
            <FilterInput
              value={threshold}
              onChange={onThresholdChange}
              placeholder="Filter by min sales ($)"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

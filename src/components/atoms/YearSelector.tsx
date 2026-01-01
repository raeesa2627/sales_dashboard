import { cn } from "@/lib/utils";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const YearSelector = ({ years, selectedYear, onYearChange }: YearSelectorProps) => {
  return (
    <div className="flex gap-2">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
            selectedYear === year
              ? "bg-primary text-primary-foreground glow"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearSelector;

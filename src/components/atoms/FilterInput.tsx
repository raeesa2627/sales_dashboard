import { Search } from "lucide-react";

interface FilterInputProps {
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
}

const FilterInput = ({ value, onChange, placeholder = "Min sales threshold..." }: FilterInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <input
        type="number"
        value={value || ""}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>
  );
};

export default FilterInput;

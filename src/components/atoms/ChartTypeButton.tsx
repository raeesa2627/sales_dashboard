import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ChartTypeButtonProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ChartTypeButton = ({ icon: Icon, label, isActive, onClick }: ChartTypeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        isActive 
          ? "bg-primary text-primary-foreground glow" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
};

export default ChartTypeButton;

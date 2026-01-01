import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
  delay?: number;
}

const ChartCard = ({ title, description, children, actions, delay = 0 }: ChartCardProps) => {
  return (
    <div 
      className="glass card-shadow rounded-xl p-6 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        {actions && <div className="flex gap-2 flex-wrap">{actions}</div>}
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default ChartCard;

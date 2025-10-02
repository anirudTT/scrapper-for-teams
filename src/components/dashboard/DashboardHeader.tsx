import { Button } from "@/components/ui/button";
import { TimeRangeFilter } from "../filters/TimeRangeFilter";
import { LLMFilter } from "../filters/LLMFilter";
import type { TimeRange, LLMFilter as LLMFilterType } from "../../types";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  lastUpdate: string;
  timeRanges: TimeRange[];
  selectedTimeRange: TimeRange;
  onTimeRangeChange: (timeRange: TimeRange) => void;
  llmFilters: LLMFilterType[];
  onLLMToggle: (llmId: string) => void;
  onRefresh: () => void;
  loading: boolean;
}

export const DashboardHeader = ({
  title,
  subtitle,
  lastUpdate,
  timeRanges,
  selectedTimeRange,
  onTimeRangeChange,
  llmFilters,
  onLLMToggle,
  onRefresh,
  loading,
}: DashboardHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
            <span className="text-2xl">📉</span>
          </div>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Next update: {lastUpdate}
          </p>
        </div>
        <Button onClick={onRefresh} disabled={loading} variant="outline">
          {loading ? "Refreshing..." : "Refresh"}
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2">Time Range</h3>
          <TimeRangeFilter
            timeRanges={timeRanges}
            selectedTimeRange={selectedTimeRange}
            onTimeRangeChange={onTimeRangeChange}
          />
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">LLM Filters</h3>
          <LLMFilter llmFilters={llmFilters} onLLMToggle={onLLMToggle} />
        </div>
      </div>
    </div>
  );
};

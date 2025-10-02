import { Button } from "@/components/ui/button";
import type { TimeRange } from "../../types";

interface TimeRangeFilterProps {
  timeRanges: TimeRange[];
  selectedTimeRange: TimeRange;
  onTimeRangeChange: (timeRange: TimeRange) => void;
}

export const TimeRangeFilter = ({
  timeRanges,
  selectedTimeRange,
  onTimeRangeChange,
}: TimeRangeFilterProps) => {
  return (
    <div className="flex gap-2">
      {timeRanges.map((timeRange) => (
        <Button
          key={timeRange.value}
          variant={
            selectedTimeRange.value === timeRange.value ? "default" : "outline"
          }
          size="sm"
          onClick={() => onTimeRangeChange(timeRange)}
          className={
            selectedTimeRange.value === timeRange.value
              ? "bg-amber-600 hover:bg-amber-700"
              : ""
          }
        >
          {timeRange.label}
        </Button>
      ))}
    </div>
  );
};

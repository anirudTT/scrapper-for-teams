import type { SentimentData } from "../../types";
import { getSentimentGaugeColor } from "../../utils/sentiment";

interface SentimentGaugeProps {
  data: SentimentData;
  onModeChange: (mode: "average" | "latest") => void;
  currentMode: "average" | "latest";
}

export const SentimentGauge = ({
  data,
  onModeChange,
  currentMode,
}: SentimentGaugeProps) => {
  const gaugeColor = getSentimentGaugeColor(data.value);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (data.value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-16 mb-4">
        <svg className="w-32 h-16 transform -rotate-90" viewBox="0 0 100 50">
          {/* Background arc */}
          <path
            d="M 10 45 A 40 40 0 0 1 90 45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 10 45 A 40 40 0 0 1 90 45"
            stroke={gaugeColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color: gaugeColor }}>
            {data.value}%
          </span>
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-lg font-semibold" style={{ color: gaugeColor }}>
          {data.label}
        </p>
        <p className="text-sm text-muted-foreground">
          Based on {data.postsCount.toLocaleString()} posts/comments
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onModeChange("average")}
          className={`px-3 py-1 text-sm rounded ${
            currentMode === "average"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Average
        </button>
        <button
          onClick={() => onModeChange("latest")}
          className={`px-3 py-1 text-sm rounded ${
            currentMode === "latest"
              ? "bg-amber-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Latest
        </button>
      </div>
    </div>
  );
};

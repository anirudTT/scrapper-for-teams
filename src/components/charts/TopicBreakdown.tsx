import type { TopicData } from "../../types";
import { getSentimentColor } from "../../utils/sentiment";

interface TopicBreakdownProps {
  topics: TopicData[];
  showAll?: boolean;
  maxItems?: number;
}

export const TopicBreakdown = ({
  topics,
  showAll = false,
  maxItems = 10,
}: TopicBreakdownProps) => {
  const displayTopics = showAll ? topics : topics.slice(0, maxItems);
  const totalReferences = topics.reduce(
    (sum, topic) => sum + topic.references,
    0
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Topic Breakdown</h3>

      <div className="flex items-center gap-4">
        {/* Donut Chart */}
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            {displayTopics.map((topic, index) => {
              const percentage = (topic.references / totalReferences) * 100;
              const circumference = 2 * Math.PI * 40;
              const strokeDasharray = circumference;
              const strokeDashoffset =
                circumference - (percentage / 100) * circumference;
              const rotation = topics
                .slice(0, index)
                .reduce(
                  (sum, t) => sum + (t.references / totalReferences) * 360,
                  0
                );

              return (
                <circle
                  key={topic.name}
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={topic.color}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  transform={`rotate(${rotation} 50 50)`}
                  className="transition-all duration-500"
                />
              );
            })}
          </svg>
        </div>

        {/* Topic List */}
        <div className="flex-1 space-y-2">
          {displayTopics.map((topic) => (
            <div key={topic.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: topic.color }}
                />
                <span className="text-sm font-medium">{topic.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    backgroundColor: getSentimentColor(topic.sentiment) + "20",
                    color: getSentimentColor(topic.sentiment),
                  }}
                >
                  {topic.sentiment}
                </span>
                <span className="text-sm text-muted-foreground">
                  {topic.references}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!showAll && topics.length > maxItems && (
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Show all {topics.length} topics
        </button>
      )}
    </div>
  );
};

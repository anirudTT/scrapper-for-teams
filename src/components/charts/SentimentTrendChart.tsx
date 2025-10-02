import type { SentimentTrendPoint, LLMFilter } from "../../types";

interface SentimentTrendChartProps {
  data: SentimentTrendPoint[];
  selectedLLMs: LLMFilter[];
}

export const SentimentTrendChart = ({
  data,
  selectedLLMs,
}: SentimentTrendChartProps) => {
  const maxValue = 100;
  const minValue = 0;
  const chartHeight = 200;
  const chartWidth = 400;

  const getY = (value: number) => {
    return (
      chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight
    );
  };

  const getX = (index: number) => {
    return (index / (data.length - 1)) * chartWidth;
  };

  const createPath = (values: number[], color: string) => {
    const points = values
      .map((value, index) => {
        const x = getX(index);
        const y = getY(value);
        return `${index === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    return (
      <path
        d={points}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        className="transition-all duration-300"
      />
    );
  };

  const createDots = (values: number[], color: string) => {
    return values.map((value, index) => {
      const x = getX(index);
      const y = getY(value);
      return (
        <circle
          key={index}
          cx={x}
          cy={y}
          r="3"
          fill={color}
          className="transition-all duration-300"
        />
      );
    });
  };

  const isLLMSelected = (llmId: string) => {
    return selectedLLMs.find((llm) => llm.id === llmId)?.selected ?? false;
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Sentiment Trend (24h)</h3>
        <div className="flex gap-4 text-sm">
          {isLLMSelected("chatgpt") && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <span>ChatGPT</span>
            </div>
          )}
          {isLLMSelected("claude") && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-amber-500"></div>
              <span>Claude AI</span>
            </div>
          )}
          {isLLMSelected("gemini") && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span>Gemini</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <svg width={chartWidth} height={chartHeight} className="border rounded">
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((value) => (
            <line
              key={value}
              x1={0}
              y1={getY(value)}
              x2={chartWidth}
              y2={getY(value)}
              stroke="#e5e7eb"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          ))}

          {/* Y-axis labels */}
          {[0, 25, 50, 75, 100].map((value) => (
            <text
              key={value}
              x={-10}
              y={getY(value) + 4}
              textAnchor="end"
              className="text-xs fill-gray-500"
            >
              {value}%
            </text>
          ))}

          {/* Data lines */}
          {isLLMSelected("chatgpt") && (
            <>
              {createPath(
                data.map((d) => d.chatgpt),
                "#22c55e"
              )}
              {createDots(
                data.map((d) => d.chatgpt),
                "#22c55e"
              )}
            </>
          )}
          {isLLMSelected("claude") && (
            <>
              {createPath(
                data.map((d) => d.claude),
                "#f59e0b"
              )}
              {createDots(
                data.map((d) => d.claude),
                "#f59e0b"
              )}
            </>
          )}
          {isLLMSelected("gemini") && (
            <>
              {createPath(
                data.map((d) => d.gemini),
                "#3b82f6"
              )}
              {createDots(
                data.map((d) => d.gemini),
                "#3b82f6"
              )}
            </>
          )}
        </svg>
      </div>
    </div>
  );
};

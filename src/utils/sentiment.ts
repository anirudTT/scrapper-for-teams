import type { TopicData, KeywordData } from "../types";

export const getSentimentColor = (sentiment: string): string => {
  const colors = {
    "Very Negative": "#ef4444",
    Negative: "#f97316",
    "Slightly Negative": "#eab308",
    Neutral: "#6b7280",
    "Slightly Positive": "#22c55e",
    Positive: "#10b981",
    "Very Positive": "#059669",
  };
  return colors[sentiment as keyof typeof colors] || "#6b7280";
};

export const getSentimentBarWidth = (sentiment: string): string => {
  const widths = {
    "Very Negative": "w-1/6",
    Negative: "w-2/6",
    "Slightly Negative": "w-3/6",
    Neutral: "w-4/6",
    "Slightly Positive": "w-5/6",
    Positive: "w-full",
    "Very Positive": "w-full",
  };
  return widths[sentiment as keyof typeof widths] || "w-4/6";
};

export const getSentimentLabel = (value: number): string => {
  if (value >= 80) return "Very Positive";
  if (value >= 60) return "Positive";
  if (value >= 55) return "Slightly Positive";
  if (value >= 45) return "Neutral";
  if (value >= 35) return "Slightly Negative";
  if (value >= 20) return "Negative";
  return "Very Negative";
};

export const getSentimentGaugeColor = (value: number): string => {
  if (value >= 60) return "#22c55e";
  if (value >= 40) return "#eab308";
  return "#ef4444";
};

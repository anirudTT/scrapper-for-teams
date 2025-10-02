import { useState } from "react";
import type { DashboardData, TimeRange, LLMFilter } from "../types";
import { mockDashboardData, timeRanges, llmFilters } from "../data/mockData";

export const useDashboard = () => {
  const [data, setData] = useState<DashboardData>(mockDashboardData);
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>(
    timeRanges[0]
  );
  const [selectedLLMs, setSelectedLLMs] = useState<LLMFilter[]>(llmFilters);
  const [loading, setLoading] = useState(false);

  const updateTimeRange = (timeRange: TimeRange) => {
    setSelectedTimeRange(timeRange);
    // In a real app, this would trigger a new API call
    setLoading(true);
    setTimeout(() => {
      setData(mockDashboardData); // Simulate API call
      setLoading(false);
    }, 500);
  };

  const toggleLLM = (llmId: string) => {
    setSelectedLLMs((prev) =>
      prev.map((llm) =>
        llm.id === llmId ? { ...llm, selected: !llm.selected } : llm
      )
    );
  };

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setData(mockDashboardData);
      setLoading(false);
    }, 1000);
  };

  return {
    data,
    selectedTimeRange,
    selectedLLMs,
    loading,
    updateTimeRange,
    toggleLLM,
    refreshData,
  };
};

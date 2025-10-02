import { DashboardHeader } from "./components/dashboard/DashboardHeader";
import { DashboardGrid } from "./components/dashboard/DashboardGrid";
import { SocialMediaTable } from "./components/SocialMediaTable";
import { SocialInsightsDashboard } from "./components/SocialInsightsDashboard";
import { useDashboard } from "./hooks/useDashboard";
import { timeRanges } from "./data/mockData";
import { socialMediaData } from "./data/socialMediaData";
import { useState } from "react";

function App() {
  const {
    data,
    selectedTimeRange,
    selectedLLMs,
    loading,
    updateTimeRange,
    toggleLLM,
    refreshData,
  } = useDashboard();

  const [activeTab, setActiveTab] = useState<"llm-dashboard" | "social-insights" | "social-table">("social-insights");

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-7xl">
        <DashboardHeader
          title="Social Media Analytics Platform"
          subtitle="Comprehensive sentiment tracking and social media insights."
          lastUpdate="02:03 PM"
          timeRanges={timeRanges}
          selectedTimeRange={selectedTimeRange}
          onTimeRangeChange={updateTimeRange}
          llmFilters={selectedLLMs}
          onLLMToggle={toggleLLM}
          onRefresh={refreshData}
          loading={loading}
        />

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-border">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("social-insights")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "social-insights"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Social Insights Dashboard
              </button>
              <button
                onClick={() => setActiveTab("social-table")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "social-table"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                Detailed Posts Table
              </button>
              <button
                onClick={() => setActiveTab("llm-dashboard")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "llm-dashboard"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300"
                }`}
              >
                LLM Dashboard
              </button>
            </nav>
          </div>
        </div>

        {activeTab === "social-insights" && (
          <SocialInsightsDashboard data={socialMediaData} />
        )}
        
        {activeTab === "social-table" && (
          <SocialMediaTable data={socialMediaData} />
        )}
        
        {activeTab === "llm-dashboard" && (
          <DashboardGrid data={data} selectedLLMs={selectedLLMs} />
        )}
      </div>
    </div>
  );
}

export default App;

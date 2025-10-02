import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SentimentGauge } from "../charts/SentimentGauge";
import { SentimentTrendChart } from "../charts/SentimentTrendChart";
import { TopicBreakdown } from "../charts/TopicBreakdown";
import { TrendingKeywords } from "../charts/TrendingKeywords";
import { RecentPosts } from "./RecentPosts";
import type { DashboardData, LLMFilter } from "../../types";
import { useState } from "react";

interface DashboardGridProps {
  data: DashboardData;
  selectedLLMs: LLMFilter[];
}

export const DashboardGrid = ({ data, selectedLLMs }: DashboardGridProps) => {
  const [sentimentMode, setSentimentMode] = useState<"average" | "latest">(
    "average"
  );

  return (
    <div className="space-y-6">
      {/* Main Metrics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Community Sentiment */}
        <Card>
          <CardHeader>
            <CardTitle>Community Sentiment</CardTitle>
          </CardHeader>
          <CardContent>
            <SentimentGauge
              data={data.communitySentiment}
              onModeChange={setSentimentMode}
              currentMode={sentimentMode}
            />
          </CardContent>
        </Card>

        {/* Sentiment Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Trend (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <SentimentTrendChart
              data={data.sentimentTrend}
              selectedLLMs={selectedLLMs}
            />
          </CardContent>
        </Card>
      </div>

      {/* Analysis Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Topic Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Topic Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <TopicBreakdown topics={data.topics} />
          </CardContent>
        </Card>

        {/* Trending Keywords */}
        <Card>
          <CardHeader>
            <CardTitle>Trending Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendingKeywords keywords={data.keywords} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <RecentPosts posts={data.recentPosts} />
    </div>
  );
};

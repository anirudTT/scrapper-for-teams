import type { SocialMediaPost } from "@/types";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface SocialInsightsDashboardProps {
  data: SocialMediaPost[];
}

export function SocialInsightsDashboard({
  data,
}: SocialInsightsDashboardProps) {
  // Calculate platform breakdown
  const platformBreakdown = data.reduce((acc, post) => {
    acc[post.platform] = (acc[post.platform] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate sentiment analysis
  const sentimentAnalysis = data.reduce((acc, post) => {
    const sentiment = post.sentiment?.label || "unknown";
    acc[sentiment] = (acc[sentiment] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate toxicity levels
  const toxicityLevels = data.reduce((acc, post) => {
    const toxicity = post.moderation?.toxicity || "none";
    const level =
      typeof toxicity === "number"
        ? toxicity > 0.5
          ? "high"
          : toxicity > 0.2
          ? "medium"
          : "low"
        : toxicity.toString().toLowerCase();
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate top topics
  const topicCounts = data.reduce((acc, post) => {
    const topics = Array.isArray(post.topics)
      ? post.topics
      : post.topics?.labels || [];
    topics.forEach((topic) => {
      acc[topic] = (acc[topic] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topTopics = Object.entries(topicCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Calculate persona analysis
  const personaCounts = data.reduce((acc, post) => {
    const personas = Array.isArray(post.persona)
      ? post.persona
      : post.persona?.labels || [];
    personas.forEach((persona) => {
      acc[persona] = (acc[persona] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  const topPersonas = Object.entries(personaCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Get recent posts timeline
  const recentPosts = data.slice(0, 5);

  // Calculate entity mentions
  const entityCounts = data.reduce((acc, post) => {
    if (post.entities && typeof post.entities === "object") {
      Object.values(post.entities).forEach((entityArray) => {
        if (Array.isArray(entityArray)) {
          entityArray.forEach((entity) => {
            acc[entity] = (acc[entity] || 0) + 1;
          });
        }
      });
    }
    return acc;
  }, {} as Record<string, number>);

  const topEntities = Object.entries(entityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100";
      case "negative":
        return "text-red-600 bg-red-100";
      case "neutral":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return "text-blue-700 bg-blue-100";
      case "reddit":
        return "text-orange-700 bg-orange-100";
      case "discord":
        return "text-indigo-700 bg-indigo-100";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  const ProgressBar = ({
    value,
    max,
    className = "",
  }: {
    value: number;
    max: number;
    className?: string;
  }) => (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${className}`}
          style={{ width: `${Math.max((value / max) * 100, 5)}%` }}
        />
      </div>
      <span className="text-sm font-medium w-6 text-right">{value}</span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            TENSTORRENT SOCIAL INSIGHTS DASHBOARD
          </h1>
          <p className="text-gray-600">
            Real-time analysis of social media mentions and sentiment
          </p>
        </div>
      </Card>

      {/* Top Row Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Platform Breakdown */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            PLATFORM BREAKDOWN
          </h3>
          <div className="space-y-3">
            {Object.entries(platformBreakdown).map(([platform, count]) => (
              <div key={platform} className="flex items-center justify-between">
                <span className="capitalize font-medium">{platform}</span>
                <ProgressBar
                  value={count}
                  max={Math.max(...Object.values(platformBreakdown))}
                  className={getPlatformColor(platform).split(" ")[1]}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            SENTIMENT ANALYSIS
          </h3>
          <div className="space-y-3">
            {Object.entries(sentimentAnalysis).map(([sentiment, count]) => (
              <div
                key={sentiment}
                className="flex items-center justify-between"
              >
                <span className="capitalize font-medium">{sentiment}</span>
                <ProgressBar
                  value={count}
                  max={Math.max(...Object.values(sentimentAnalysis))}
                  className={getSentimentColor(sentiment).split(" ")[1]}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Toxicity Levels */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            TOXICITY LEVELS
          </h3>
          <div className="space-y-3">
            {Object.entries(toxicityLevels).map(([level, count]) => (
              <div key={level} className="flex items-center justify-between">
                <span className="capitalize font-medium">{level}</span>
                <ProgressBar
                  value={count}
                  max={Math.max(...Object.values(toxicityLevels))}
                  className="bg-gray-400"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Posts Total */}
        <Card className="p-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold mb-2 text-center">
            POSTS TOTAL
          </h3>
          <div className="text-4xl font-bold text-blue-600">{data.length}</div>
          <div className="text-sm text-gray-600 mt-1">POSTS</div>
        </Card>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Topics */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            TOP TOPICS MENTIONED
          </h3>
          <div className="space-y-3">
            {topTopics.map(([topic, count]) => (
              <div key={topic} className="flex items-center justify-between">
                <span className="capitalize font-medium">{topic}</span>
                <ProgressBar
                  value={count}
                  max={Math.max(...topTopics.map(([, c]) => c))}
                  className="bg-purple-400"
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Persona Analysis */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            PERSONA ANALYSIS
          </h3>
          <div className="space-y-3">
            {topPersonas.map(([persona, count]) => (
              <div key={persona} className="flex items-center justify-between">
                <span className="capitalize font-medium">{persona}</span>
                <ProgressBar
                  value={count}
                  max={Math.max(...topPersonas.map(([, c]) => c))}
                  className="bg-teal-400"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Posts Timeline */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          RECENT POSTS TIMELINE
        </h3>
        <div className="space-y-3">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    getSentimentColor(post.sentiment?.label || "neutral").split(
                      " "
                    )[1]
                  }`}
                />
                <Badge
                  variant={
                    post.sentiment?.label === "positive"
                      ? "positive"
                      : post.sentiment?.label === "negative"
                      ? "negative"
                      : "neutral"
                  }
                  className="text-xs"
                >
                  {(post.sentiment?.label || "neutral").toUpperCase()}
                </Badge>
              </div>
              <Badge
                variant={
                  getPlatformColor(post.platform).includes("blue")
                    ? "linkedin"
                    : getPlatformColor(post.platform).includes("orange")
                    ? "reddit"
                    : "discord"
                }
                className="text-xs"
              >
                {post.platform}
              </Badge>
              <div className="flex-1 text-sm">
                {post.text_raw.length > 80
                  ? `${post.text_raw.substring(0, 80)}...`
                  : post.text_raw}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Entity Mentions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">
          ENTITY MENTIONS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topEntities.map(([entity, count]) => (
            <div key={entity} className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="font-semibold text-lg text-blue-600">{count}</div>
              <div className="text-sm text-gray-600 capitalize">{entity}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

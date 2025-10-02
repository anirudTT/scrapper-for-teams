import type { DashboardData, TimeRange, LLMFilter } from "../types";

export const timeRanges: TimeRange[] = [
  { label: "Last 24 Hours", value: "24h", hours: 24 },
  { label: "Last 7 Days", value: "7d", hours: 168 },
  { label: "Last 30 Days", value: "30d", hours: 720 },
  { label: "All Time", value: "all", hours: 0 },
];

export const llmFilters: LLMFilter[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    icon: "💬",
    color: "green",
    selected: true,
  },
  { id: "claude", name: "Claude", icon: "⭐", color: "brown", selected: true },
  { id: "gemini", name: "Gemini", icon: "💎", color: "blue", selected: true },
];

export const mockDashboardData: DashboardData = {
  communitySentiment: {
    value: 43,
    label: "Slightly Negative",
    postsCount: 1520,
  },
  sentimentTrend: [
    { time: "14:00", chatgpt: 45, claude: 42, gemini: 38 },
    { time: "15:00", chatgpt: 47, claude: 44, gemini: 25 },
    { time: "16:00", chatgpt: 43, claude: 41, gemini: 22 },
    { time: "17:00", chatgpt: 46, claude: 43, gemini: 35 },
    { time: "18:00", chatgpt: 44, claude: 42, gemini: 48 },
    { time: "19:00", chatgpt: 42, claude: 40, gemini: 52 },
    { time: "20:00", chatgpt: 45, claude: 43, gemini: 55 },
    { time: "21:00", chatgpt: 48, claude: 46, gemini: 58 },
    { time: "22:00", chatgpt: 46, claude: 44, gemini: 60 },
    { time: "23:00", chatgpt: 44, claude: 42, gemini: 58 },
    { time: "00:00", chatgpt: 47, claude: 45, gemini: 55 },
    { time: "01:00", chatgpt: 49, claude: 47, gemini: 52 },
    { time: "02:00", chatgpt: 51, claude: 49, gemini: 48 },
    { time: "03:00", chatgpt: 48, claude: 46, gemini: 45 },
    { time: "04:00", chatgpt: 46, claude: 44, gemini: 62 },
    { time: "05:00", chatgpt: 44, claude: 42, gemini: 58 },
    { time: "06:00", chatgpt: 42, claude: 40, gemini: 55 },
    { time: "07:00", chatgpt: 45, claude: 43, gemini: 52 },
    { time: "08:00", chatgpt: 47, claude: 45, gemini: 48 },
    { time: "09:00", chatgpt: 49, claude: 47, gemini: 45 },
    { time: "10:00", chatgpt: 46, claude: 44, gemini: 42 },
    { time: "11:00", chatgpt: 44, claude: 42, gemini: 40 },
    { time: "12:00", chatgpt: 42, claude: 40, gemini: 38 },
  ],
  topics: [
    {
      name: "Features",
      sentiment: "Neutral",
      references: 314,
      color: "#f97316",
    },
    {
      name: "Feedback",
      sentiment: "Negative",
      references: 246,
      color: "#ec4899",
    },
    {
      name: "Performance",
      sentiment: "Negative",
      references: 74,
      color: "#ef4444",
    },
    {
      name: "Troubleshooting",
      sentiment: "Very Negative",
      references: 48,
      color: "#eab308",
    },
    {
      name: "Comparison",
      sentiment: "Slightly Negative",
      references: 60,
      color: "#a855f7",
    },
    {
      name: "Support",
      sentiment: "Very Negative",
      references: 29,
      color: "#06b6d4",
    },
    {
      name: "Pricing",
      sentiment: "Slightly Negative",
      references: 27,
      color: "#f97316",
    },
    {
      name: "Integration",
      sentiment: "Very Negative",
      references: 31,
      color: "#c084fc",
    },
    {
      name: "Moderation",
      sentiment: "Negative",
      references: 44,
      color: "#1e40af",
    },
    {
      name: "Authentication",
      sentiment: "Negative",
      references: 15,
      color: "#1e40af",
    },
  ],
  keywords: [
    { keyword: "bots", mentions: 106, sentiment: "Neutral" },
    { keyword: "GPT-4", mentions: 105, sentiment: "Neutral" },
    { keyword: "image", mentions: 100, sentiment: "Neutral" },
    { keyword: "generators", mentions: 91, sentiment: "Slightly Positive" },
    { keyword: "vision", mentions: 80, sentiment: "Slightly Positive" },
    { keyword: "Sonnet", mentions: 36, sentiment: "Neutral" },
    { keyword: "Claude", mentions: 36, sentiment: "Neutral" },
    { keyword: "usage", mentions: 30, sentiment: "Slightly Negative" },
    { keyword: "limits", mentions: 28, sentiment: "Slightly Negative" },
    { keyword: "Opus", mentions: 20, sentiment: "Slightly Negative" },
  ],
  recentPosts: [
    {
      author: "ClaudeCode",
      topic: "Feedback",
      title: "Claude Code 2.0 Is Promising But Flawed",
      timeAgo: "26m ago",
    },
    {
      author: "GPTUser",
      topic: "Features",
      title: "New GPT-4 Features Are Amazing",
      timeAgo: "1h ago",
    },
    {
      author: "GeminiFan",
      topic: "Performance",
      title: "Gemini Speed Improvements",
      timeAgo: "2h ago",
    },
  ],
};

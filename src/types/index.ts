export interface SentimentData {
  value: number;
  label: string;
  postsCount: number;
}

export interface TopicData {
  name: string;
  sentiment:
    | "Very Negative"
    | "Negative"
    | "Slightly Negative"
    | "Neutral"
    | "Slightly Positive"
    | "Positive"
    | "Very Positive";
  references: number;
  color: string;
}

export interface KeywordData {
  keyword: string;
  mentions: number;
  sentiment:
    | "Very Negative"
    | "Negative"
    | "Slightly Negative"
    | "Neutral"
    | "Slightly Positive"
    | "Positive"
    | "Very Positive";
}

export interface PostData {
  author: string;
  topic: string;
  title: string;
  timeAgo: string;
}

export interface TimeRange {
  label: string;
  value: string;
  hours: number;
}

export interface LLMFilter {
  id: string;
  name: string;
  icon: string;
  color: string;
  selected: boolean;
}

export interface SentimentTrendPoint {
  time: string;
  chatgpt: number;
  claude: number;
  gemini: number;
}

export interface DashboardData {
  communitySentiment: SentimentData;
  sentimentTrend: SentimentTrendPoint[];
  topics: TopicData[];
  keywords: KeywordData[];
  recentPosts: PostData[];
}

// Social Media Data Types
export interface SocialMediaPreprocess {
  text_clean?: string;
  lang?: string;
  pii_redacted?: boolean | string | string[];
}

export interface SocialMediaSentiment {
  label?: "positive" | "negative" | "neutral";
  confidence?: number;
}

export interface SocialMediaIssueTypes {
  labels?: string[];
}

export interface SocialMediaTopics {
  labels?: string[];
}

export interface SocialMediaPersona {
  labels?: string[];
}

export interface SocialMediaEntities {
  product?: string[];
  feature?: string[];
  component?: string[];
  version?: string[];
  competitor?: string[];
}

export interface SocialMediaModeration {
  toxicity?: string | number;
  is_spam?: boolean | string;
}

export interface SocialMediaPost {
  platform: "linkedin" | "discord" | "reddit";
  text_raw: string;
  preprocess?: SocialMediaPreprocess;
  sentiment?: SocialMediaSentiment;
  issue_types?: SocialMediaIssueTypes | string[];
  topics?: SocialMediaTopics | string[];
  persona?: SocialMediaPersona | string[];
  entities?: SocialMediaEntities | string[];
  moderation?: SocialMediaModeration;
}

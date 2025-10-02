import type { KeywordData } from "../../types";
import { getSentimentColor, getSentimentBarWidth } from "../../utils/sentiment";

interface TrendingKeywordsProps {
  keywords: KeywordData[];
  showAll?: boolean;
  maxItems?: number;
}

export const TrendingKeywords = ({
  keywords,
  showAll = false,
  maxItems = 10,
}: TrendingKeywordsProps) => {
  const displayKeywords = showAll ? keywords : keywords.slice(0, maxItems);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Trending Keywords</h3>
        <p className="text-sm text-muted-foreground">
          Color and tag show sentiment toward that keyword.
        </p>
      </div>

      <div className="space-y-3">
        {displayKeywords.map((keyword) => (
          <div key={keyword.keyword} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{keyword.keyword}</span>
              <span className="text-sm text-muted-foreground">
                {keyword.mentions} mentions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${getSentimentBarWidth(
                    keyword.sentiment
                  )}`}
                  style={{
                    backgroundColor: getSentimentColor(keyword.sentiment),
                  }}
                />
              </div>
              <span
                className="text-xs px-2 py-1 rounded"
                style={{
                  backgroundColor: getSentimentColor(keyword.sentiment) + "20",
                  color: getSentimentColor(keyword.sentiment),
                }}
              >
                {keyword.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>

      {!showAll && keywords.length > maxItems && (
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Show all {keywords.length} keywords
        </button>
      )}
    </div>
  );
};

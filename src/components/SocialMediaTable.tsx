import React, { useState, useMemo } from "react";
import type { SocialMediaPost } from "@/types";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

interface SocialMediaTableProps {
  data: SocialMediaPost[];
}

type SortField = "platform" | "sentiment" | "confidence" | "toxicity";
type SortDirection = "asc" | "desc";

export function SocialMediaTable({ data }: SocialMediaTableProps) {
  const [sortField, setSortField] = useState<SortField>("confidence");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
  const [filterPlatform, setFilterPlatform] = useState<string>("all");
  const [filterSentiment, setFilterSentiment] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const toggleRowExpansion = (index: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedRows(newExpanded);
  };

  const filteredAndSortedData = useMemo(() => {
    const filtered = data.filter((post) => {
      const matchesPlatform =
        filterPlatform === "all" || post.platform === filterPlatform;
      const matchesSentiment =
        filterSentiment === "all" || post.sentiment?.label === filterSentiment;
      const matchesSearch =
        searchTerm === "" ||
        post.text_raw.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.preprocess?.text_clean &&
          post.preprocess.text_clean
            .toLowerCase()
            .includes(searchTerm.toLowerCase()));

      return matchesPlatform && matchesSentiment && matchesSearch;
    });

    return filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case "platform":
          aValue = a.platform;
          bValue = b.platform;
          break;
        case "sentiment":
          aValue = a.sentiment?.label || "";
          bValue = b.sentiment?.label || "";
          break;
        case "confidence":
          aValue = a.sentiment?.confidence || 0;
          bValue = b.sentiment?.confidence || 0;
          break;
        case "toxicity":
          aValue =
            typeof a.moderation?.toxicity === "number"
              ? a.moderation.toxicity
              : 0;
          bValue =
            typeof b.moderation?.toxicity === "number"
              ? b.moderation.toxicity
              : 0;
          break;
        default:
          return 0;
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (sortDirection === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [
    data,
    sortField,
    sortDirection,
    filterPlatform,
    filterSentiment,
    searchTerm,
  ]);

  const getSentimentVariant = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "positive";
      case "negative":
        return "negative";
      default:
        return "neutral";
    }
  };

  const getPlatformVariant = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return "linkedin";
      case "discord":
        return "discord";
      case "reddit":
        return "reddit";
      default:
        return "secondary";
    }
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const renderArrayLabels = (
    labels: string[] | undefined,
    variant: string = "outline"
  ) => {
    if (!labels || labels.length === 0)
      return <span className="text-muted-foreground">-</span>;

    return (
      <div className="flex flex-wrap gap-1">
        {labels.slice(0, 3).map((label, index) => (
          <Badge
            key={index}
            variant={variant as "outline" | "secondary"}
            className="text-xs"
          >
            {label}
          </Badge>
        ))}
        {labels.length > 3 && (
          <Badge variant="outline" className="text-xs">
            +{labels.length - 3}
          </Badge>
        )}
      </div>
    );
  };

  const SortButton = ({
    field,
    children,
  }: {
    field: SortField;
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className="h-auto p-0 font-medium hover:bg-transparent"
      onClick={() => handleSort(field)}
    >
      {children}
      {sortField === field &&
        (sortDirection === "asc" ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        ))}
    </Button>
  );

  return (
    <Card className="w-full">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Social Media Posts Analysis
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Platforms</option>
                <option value="linkedin">LinkedIn</option>
                <option value="discord">Discord</option>
                <option value="reddit">Reddit</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={filterSentiment}
                onChange={(e) => setFilterSentiment(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Sentiments</option>
                <option value="positive">Positive</option>
                <option value="neutral">Neutral</option>
                <option value="negative">Negative</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-muted-foreground mb-4">
            Showing {filteredAndSortedData.length} of {data.length} posts
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">
                  <SortButton field="platform">Platform</SortButton>
                </TableHead>
                <TableHead className="min-w-[300px]">Content</TableHead>
                <TableHead className="w-[120px]">
                  <SortButton field="sentiment">Sentiment</SortButton>
                </TableHead>
                <TableHead className="w-[100px]">
                  <SortButton field="confidence">Confidence</SortButton>
                </TableHead>
                <TableHead className="w-[150px]">Topics</TableHead>
                <TableHead className="w-[150px]">Personas</TableHead>
                <TableHead className="w-[100px]">
                  <SortButton field="toxicity">Toxicity</SortButton>
                </TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedData.map((post, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell>
                      <Badge
                        variant={
                          getPlatformVariant(post.platform) as
                            | "linkedin"
                            | "discord"
                            | "reddit"
                            | "secondary"
                        }
                      >
                        {post.platform}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm">
                          {expandedRows.has(index)
                            ? post.text_raw
                            : truncateText(post.text_raw, 150)}
                        </p>
                        {post.preprocess?.lang && (
                          <Badge variant="outline" className="text-xs">
                            {post.preprocess.lang}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {post.sentiment?.label && (
                        <Badge
                          variant={
                            getSentimentVariant(post.sentiment.label) as
                              | "positive"
                              | "negative"
                              | "neutral"
                          }
                        >
                          {post.sentiment.label}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {post.sentiment?.confidence && (
                        <div className="text-sm font-medium">
                          {(post.sentiment.confidence * 100).toFixed(1)}%
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {renderArrayLabels(
                        Array.isArray(post.topics)
                          ? post.topics
                          : post.topics?.labels
                      )}
                    </TableCell>
                    <TableCell>
                      {renderArrayLabels(
                        Array.isArray(post.persona)
                          ? post.persona
                          : post.persona?.labels
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {typeof post.moderation?.toxicity === "number"
                          ? (post.moderation.toxicity * 100).toFixed(1) + "%"
                          : post.moderation?.toxicity || "-"}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleRowExpansion(index)}
                      >
                        {expandedRows.has(index) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </TableCell>
                  </TableRow>

                  {expandedRows.has(index) && (
                    <TableRow>
                      <TableCell colSpan={8} className="bg-muted/50">
                        <div className="space-y-4 p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {post.issue_types &&
                              (Array.isArray(post.issue_types)
                                ? post.issue_types.length > 0
                                : post.issue_types.labels &&
                                  post.issue_types.labels.length > 0) && (
                                <div>
                                  <h4 className="font-medium text-sm mb-2">
                                    Issue Types
                                  </h4>
                                  {renderArrayLabels(
                                    Array.isArray(post.issue_types)
                                      ? post.issue_types
                                      : post.issue_types.labels,
                                    "destructive"
                                  )}
                                </div>
                              )}

                            {post.entities &&
                              Object.keys(post.entities).length > 0 && (
                                <div>
                                  <h4 className="font-medium text-sm mb-2">
                                    Entities
                                  </h4>
                                  <div className="space-y-2">
                                    {Object.entries(post.entities).map(
                                      ([key, values]: [string, string[]]) =>
                                        values &&
                                        values.length > 0 && (
                                          <div key={key}>
                                            <span className="text-xs text-muted-foreground capitalize">
                                              {key}:
                                            </span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                              {values.map(
                                                (
                                                  value: string,
                                                  idx: number
                                                ) => (
                                                  <Badge
                                                    key={idx}
                                                    variant="secondary"
                                                    className="text-xs"
                                                  >
                                                    {value}
                                                  </Badge>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        )
                                    )}
                                  </div>
                                </div>
                              )}

                            <div>
                              <h4 className="font-medium text-sm mb-2">
                                Moderation
                              </h4>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-muted-foreground">
                                    Spam:
                                  </span>
                                  <Badge
                                    variant={
                                      post.moderation?.is_spam
                                        ? "destructive"
                                        : "positive"
                                    }
                                    className="text-xs"
                                  >
                                    {post.moderation?.is_spam ? "Yes" : "No"}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>

                          {post.preprocess?.text_clean &&
                            post.preprocess.text_clean !== post.text_raw && (
                              <div>
                                <h4 className="font-medium text-sm mb-2">
                                  Processed Text
                                </h4>
                                <p className="text-sm text-muted-foreground bg-background p-3 rounded border">
                                  {post.preprocess.text_clean}
                                </p>
                              </div>
                            )}
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
}

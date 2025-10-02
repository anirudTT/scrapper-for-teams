import type { PostData } from "../../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RecentPostsProps {
  posts: PostData[];
}

export const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Posts & Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                {post.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{post.author}</span>
                  <span
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: "#f3f4f6",
                      color: "#6b7280",
                    }}
                  >
                    {post.topic}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.timeAgo}
                  </span>
                </div>
                <p className="text-sm text-gray-900 line-clamp-2">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

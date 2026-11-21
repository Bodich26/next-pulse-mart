import { BlogMainCard } from "@/entities/blog";
import { BlogItem } from "@/entities/blog";

interface FeaturedNewsProps {
  posts: BlogItem[];
}

export const FeaturedBlogs = ({ posts }: FeaturedNewsProps) => {
  return (
    <section aria-labelledby="pulse-logs-heading">
      <div className="mb-6">
        <h2
          id="pulse-logs-heading"
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Pulse Logs.{" "}
          <span className="text-muted-foreground font-semibold">
            Stories from the workshop.
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogMainCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

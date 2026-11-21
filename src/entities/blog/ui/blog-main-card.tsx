import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared";
import { BlogItem } from "../model/blog-type";

interface BlogMainCardProps {
  post: BlogItem;
}

export const BlogMainCard = ({ post }: BlogMainCardProps) => {
  return (
    <Card
      key={post.id}
      className="p-0 group flex flex-col justify-between overflow-hidden rounded-3xl bg-card shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div>
        <CardHeader className="relative aspect-video w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </CardHeader>

        <CardContent className="p-6">
          <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
            {post.category}
          </span>
          <CardTitle className="mt-2 text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </CardTitle>
          <CardDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </CardDescription>
        </CardContent>
      </div>

      <CardFooter className="flex items-center justify-between border-t border-border px-6 py-4 text-muted-foreground">
        <time dateTime={post.date}>{post.displayDate}</time>
        <Link
          href={`/blog/${post.slug}`}
          aria-label={`Read more about ${post.title}`}
          className="inline-flex items-center gap-1 font-medium text-primary"
        >
          <span>Read</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

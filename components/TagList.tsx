import Link from 'next/link';

interface TagListProps {
  tags: string[];
  variant?: 'default' | 'compact';
}

export default function TagList({ tags, variant = 'default' }: TagListProps) {
  if (!tags || tags.length === 0) return null;

  const isCompact = variant === 'compact';

  return (
    <div
      className={`tag-list ${isCompact ? 'tag-list-compact' : ''}`}
    >
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blog?tag=${encodeURIComponent(tag)}`}
          className="tag-link"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

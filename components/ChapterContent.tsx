'use client';

import { useEffect } from 'react';
import { setupAutoMarkAsRead } from '@/lib/progress';

interface ChapterContentProps {
  chapterSlug: string;
  content: string;
}

export default function ChapterContent({ chapterSlug, content }: ChapterContentProps) {
  useEffect(() => {
    // Mark chapter as read when user scrolls to 80% of the page
    const cleanup = setupAutoMarkAsRead(chapterSlug, 'chapter', 80);

    return cleanup;
  }, [chapterSlug]);

  return (
    <div
      className="chapter-content prose"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
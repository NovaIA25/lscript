// LocalStorage keys
const STORAGE_KEY_CHAPTERS = 'lscript_read_chapters';
const STORAGE_KEY_ARTICLES = 'lscript_read_articles';

// Type-safe localStorage wrapper
function getFromStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;

  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
}

function setToStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing ${key} to localStorage:`, error);
  }
}

// ============================================
// CHAPTERS PROGRESS
// ============================================

/**
 * Get all read chapters
 */
export function getReadChapters(): string[] {
  return getFromStorage<string[]>(STORAGE_KEY_CHAPTERS, []);
}

/**
 * Mark a chapter as read
 */
export function markChapterAsRead(chapterSlug: string): void {
  const readChapters = getReadChapters();

  if (!readChapters.includes(chapterSlug)) {
    readChapters.push(chapterSlug);
    setToStorage(STORAGE_KEY_CHAPTERS, readChapters);
  }
}

/**
 * Check if a chapter is read
 */
export function isChapterRead(chapterSlug: string): boolean {
  const readChapters = getReadChapters();
  return readChapters.includes(chapterSlug);
}

/**
 * Unmark a chapter as read (useful for testing or reset)
 */
export function unmarkChapterAsRead(chapterSlug: string): void {
  const readChapters = getReadChapters();
  const filtered = readChapters.filter(slug => slug !== chapterSlug);
  setToStorage(STORAGE_KEY_CHAPTERS, filtered);
}

/**
 * Reset all chapter progress
 */
export function resetChapterProgress(): void {
  setToStorage(STORAGE_KEY_CHAPTERS, []);
}

// ============================================
// ARTICLES PROGRESS
// ============================================

/**
 * Get all read articles
 */
export function getReadArticles(): string[] {
  return getFromStorage<string[]>(STORAGE_KEY_ARTICLES, []);
}

/**
 * Mark an article as read
 */
export function markArticleAsRead(articleSlug: string): void {
  const readArticles = getReadArticles();

  if (!readArticles.includes(articleSlug)) {
    readArticles.push(articleSlug);
    setToStorage(STORAGE_KEY_ARTICLES, readArticles);
  }
}

/**
 * Check if an article is read
 */
export function isArticleRead(articleSlug: string): boolean {
  const readArticles = getReadArticles();
  return readArticles.includes(articleSlug);
}

/**
 * Unmark an article as read
 */
export function unmarkArticleAsRead(articleSlug: string): void {
  const readArticles = getReadArticles();
  const filtered = readArticles.filter(slug => slug !== articleSlug);
  setToStorage(STORAGE_KEY_ARTICLES, filtered);
}

/**
 * Reset all article progress
 */
export function resetArticleProgress(): void {
  setToStorage(STORAGE_KEY_ARTICLES, []);
}

// ============================================
// COMBINED HELPERS
// ============================================

/**
 * Get total reading progress (chapters + articles)
 */
export function getTotalProgress(): {
  chaptersRead: number;
  articlesRead: number;
  totalRead: number;
} {
  const chaptersRead = getReadChapters().length;
  const articlesRead = getReadArticles().length;

  return {
    chaptersRead,
    articlesRead,
    totalRead: chaptersRead + articlesRead,
  };
}

/**
 * Reset all progress (chapters + articles)
 */
export function resetAllProgress(): void {
  resetChapterProgress();
  resetArticleProgress();
}

// ============================================
// AUTO-MARK ON SCROLL (UTILITY)
// ============================================

/**
 * Automatically mark content as read when user scrolls to the bottom
 * Call this in a useEffect with scroll listener
 */
export function setupAutoMarkAsRead(
  contentSlug: string,
  type: 'chapter' | 'article',
  threshold: number = 90 // % of page scrolled
): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= threshold) {
      if (type === 'chapter') {
        markChapterAsRead(contentSlug);
      } else {
        markArticleAsRead(contentSlug);
      }

      // Remove listener after marking as read
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
}
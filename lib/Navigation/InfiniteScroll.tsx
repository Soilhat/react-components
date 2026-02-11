import { useEffect, useRef } from 'react';

export function InfiniteScroll({
  onReachBottom,
  hasMore,
  loading,
}: {
  onReachBottom: () => void;
  hasMore: boolean;
  loading: boolean;
}) {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onReachBottom();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) observer.observe(observerTarget.current);
    return () => observer.disconnect();
  }, [hasMore, loading, onReachBottom]);

  return (
    <div ref={observerTarget} className="h-10 w-full flex items-center justify-center">
      {loading && <span className="text-sm text-text-secondary animate-pulse">Loading more...</span>}
    </div>
  );
}

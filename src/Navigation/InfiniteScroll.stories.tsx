import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfiniteScroll } from '../../lib/main';

const generateItems = (start: number, count: number) =>
  Array.from({ length: count }, (_, i) => `Item #${start + i + 1}`);

const meta: Meta<typeof InfiniteScroll> = {
  title: 'Navigation/InfiniteScroll',
  component: InfiniteScroll,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof InfiniteScroll>;

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState<string[]>(generateItems(0, 20));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = useCallback(() => {
      if (loading || !hasMore) return;

      setLoading(true);

      // Simulate API latency
      setTimeout(() => {
        setItems((prev) => [...prev, ...generateItems(prev.length, 10)]);
        setLoading(false);

        // Stop after 50 items for demonstration
        if (items.length >= 50) {
          setHasMore(false);
        }
      }, 1500);
    }, [loading, hasMore, items.length]);

    return (
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Infinite Scroll Demo</h1>
        <div className="space-y-2 mb-4">
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 border border-border rounded shadow-sm">
              {item}
            </div>
          ))}
        </div>

        <InfiniteScroll onReachBottom={loadMore} hasMore={hasMore} loading={loading} />

        {!hasMore && <p className="text-center text-text-secondary text-sm mt-4">— You've reached the end —</p>}
      </div>
    );
  },
};

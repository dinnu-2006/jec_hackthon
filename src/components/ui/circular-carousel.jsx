import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const VISIBLE_COUNT = 5;
const RADIUS_X = 220;
const RADIUS_Y = 100;

function getItemPosition(index, activeIndex, total) {
  const offset = index - activeIndex;
  const half = Math.floor(VISIBLE_COUNT / 2);
  let adjustedOffset = offset;

  if (offset > half) adjustedOffset = offset - total;
  if (offset < -half) adjustedOffset = offset + total;

  if (Math.abs(adjustedOffset) > half * 2) return null;

  const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
  const x = Math.sin(angle) * RADIUS_X;
  const y = -Math.cos(angle) * RADIUS_Y;

  const distance = Math.abs(adjustedOffset);
  const maxDistance = half + 1;
  const scale = Math.max(0, 1 - (distance / maxDistance) * 0.3);
  const opacity = Math.max(0.3, 1 - (distance / maxDistance) * 0.7);
  const zIndex = VISIBLE_COUNT - distance;

  return { x, y, scale, opacity, zIndex, adjustedOffset };
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4000,
  className,
}) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = items.length;

  const goTo = useCallback(
    (index) => {
      const newIndex = ((index % total) + total) % total;
      if (controlledIndex === undefined) {
        setInternalIndex(newIndex);
      }
      onActiveChange?.(newIndex);
    },
    [total, controlledIndex, onActiveChange],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, next]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    const el = containerRef.current;
    el?.addEventListener('keydown', handler);
    return () => el?.removeEventListener('keydown', handler);
  }, [next, prev]);

  const activeItem = items[activeIndex];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Circular carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn(
        'relative flex flex-col items-center justify-center gap-8 outline-none',
        className,
      )}
    >
      {/* Circular track */}
      <div className="relative h-[280px] w-full max-w-lg">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i, activeIndex, total);
            if (!pos) return null;

            const isActive = i === activeIndex;
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => goTo(i)}
                aria-label={item.title}
                aria-selected={isActive}
                role="option"
                className={cn(
                  'absolute left-1/2 top-1/2 flex h-32 w-48 -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-start justify-between rounded-2xl border p-4 backdrop-blur-sm transition-shadow duration-300',
                  isActive
                    ? 'border-crimson/60 bg-gradient-to-b from-[#1a0308]/95 to-[#0a0102]/95 shadow-[0_20px_60px_-12px_rgba(200,0,24,0.4)]'
                    : 'border-white/10 bg-gradient-to-b from-zinc-900/90 to-black/90 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_-4px_rgba(200,0,24,0.2)]',
                )}
                style={{ transformOrigin: 'center center' }}
              >
                {/* Tag / code badge */}
                {item.tag && (
                  <span className={cn(
                    'rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider',
                    isActive
                      ? 'bg-crimson/20 text-crimson-bright border border-crimson/40'
                      : 'bg-white/10 text-white/60',
                  )}>
                    {item.tag}
                  </span>
                )}

                <div className="w-full">
                  {Icon && (
                    <Icon className={cn(
                      'w-4 h-4 mb-1.5 transition-colors',
                      isActive ? 'text-crimson-bright' : 'text-white/40',
                    )} />
                  )}
                  <h3 className={cn(
                    'font-display font-bold leading-tight transition-colors duration-300 uppercase tracking-wide',
                    isActive ? 'text-white text-xs' : 'text-white/70 text-[11px]',
                  )}>
                    {item.title}
                  </h3>
                  <p className={cn(
                    'mt-1 line-clamp-2 text-[10px] leading-relaxed transition-colors duration-300',
                    isActive ? 'text-crimson-bright/70' : 'text-white/30',
                  )}>
                    {item.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Center counter */}
        <motion.div
          key={activeItem?.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <span className="text-5xl font-black tracking-tight text-crimson-bright/80 font-display">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="mt-1 text-xs text-white/30 font-mono uppercase tracking-widest">
            of {String(total).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          aria-label="Previous item"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-crimson/30 bg-crimson/5 text-crimson-bright backdrop-blur-sm transition-colors hover:bg-crimson/20 hover:border-crimson"
        >
          <ChevronLeft className="size-5" />
        </motion.button>

        {/* Dot indicators */}
        <div className="flex items-center gap-1.5" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === activeIndex
                  ? 'w-6 bg-crimson-bright'
                  : 'w-1.5 bg-white/20 hover:bg-white/40',
              )}
              aria-label={`Go to item ${i + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          aria-label="Next item"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-crimson/30 bg-crimson/5 text-crimson-bright backdrop-blur-sm transition-colors hover:bg-crimson/20 hover:border-crimson"
        >
          <ChevronRight className="size-5" />
        </motion.button>
      </div>
    </div>
  );
}

export default CircularCarousel;

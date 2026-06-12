/**
 * Lightweight class name combiner. Filters out falsy values so
 * conditional Tailwind classes can be composed cleanly.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/**
 * Combines multiple CSS classes into a single string.
 * @param  {...string} classes - The CSS classes to combine.
 * @returns {string} - The combined CSS classes.
 */

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

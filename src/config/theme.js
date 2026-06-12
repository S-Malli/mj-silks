/**
 * JS-side mirror of the Tailwind theme tokens defined in `src/index.css` (@theme).
 * Use these when a raw color value is needed in JS (e.g. inline styles,
 * SVG fills, chart libraries) so the palette stays in sync everywhere.
 *
 * To re-theme the app, update both this file and the `@theme` block in
 * `src/index.css`.
 */
export const colors = {
  primary: '#D1336B',
  primaryLight: '#FBC7DA',
  primaryDark: '#A8174F',
  background: '#FFF7F2',
  surface: '#FFFFFF',
  accent: '#5B2333',
  accentLight: '#8C4A5C',
  text: '#2D2A2E',
  textMuted: '#6B6368',
  white: '#FFFFFF',
}

export const fonts = {
  display: '"Cormorant Garamond", "Georgia", serif',
  sans: '"Lato", "Segoe UI", system-ui, sans-serif',
}

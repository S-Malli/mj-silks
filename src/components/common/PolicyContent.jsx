/**
 * Consistent typography wrapper for long-form legal/policy pages
 * (Privacy Policy, Return Policy).
 */
export default function PolicyContent({ children }) {
  return (
    <div className="space-y-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-accent [&_h2]:sm:text-2xl [&_p]:leading-relaxed [&_p]:text-text-muted [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-text-muted [&_li]:leading-relaxed">
      {children}
    </div>
  )
}

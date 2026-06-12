import { MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

/**
 * Placeholder for a Google Maps embed. Swap the contents of this
 * component for an <iframe src="https://www.google.com/maps/embed?..." />
 * once a verified business location/embed URL is available.
 */
export default function MapPlaceholder() {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/10 p-8 text-center shadow-card">
      <MapPin size={40} className="text-primary" />
      <p className="font-display text-lg font-semibold text-accent">Find Us Here</p>
      <p className="max-w-xs text-sm text-text-muted">
        {siteConfig.address}
      </p>
      <p className="text-xs text-text-muted">
        (Google Map embed placeholder — to be added with store location)
      </p>
    </div>
  )
}

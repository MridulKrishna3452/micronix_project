import { fullAddress, mapsDirectionsUrl, mapsEmbedUrl } from '../../data/company'
import { Button } from '../ui/Button'
import { DirectionsIcon } from '../ui/Icons'

/**
 * Constrained-height, lazy-loaded map. Uses the keyless Google Maps embed
 * (query by address). Replace `mapsEmbedUrl` with a Maps Embed API URL
 * (with API key + place ID) for a pin that is guaranteed accurate.
 */
export function MapPreview({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line ${className}`}>
      <iframe
        title={`Map showing ${fullAddress}`}
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen={false}
        className="block h-64 w-full border-0 md:h-72"
      />
      <div className="flex flex-col gap-2 border-t border-line bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">Chintadripet, Mount Road, Chennai</p>
        <Button href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" size="sm" variant="secondary">
          <DirectionsIcon width={16} height={16} /> Get directions
        </Button>
      </div>
    </div>
  )
}

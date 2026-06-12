import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

/**
 * Drop-in SEO component for setting per-page meta tags, Open Graph data
 * and JSON-LD structured data. Render once near the top of each page.
 *
 * @param {Object} props
 * @param {string} props.title - Page title (site name is appended automatically)
 * @param {string} props.description - Meta description
 * @param {string} [props.path] - Route path used to build canonical/OG URL
 * @param {string} [props.image] - Absolute or relative OG image URL
 * @param {Object} [props.structuredData] - JSON-LD object to embed
 */
export default function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  image,
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const url = `${siteConfig.url}${path}`
  const ogImage = image || `${siteConfig.url}/og-image.jpg`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

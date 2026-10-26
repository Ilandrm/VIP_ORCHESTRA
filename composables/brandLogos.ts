const brandPaths: string[] = [
  '/brand/ct-traiteur-1.png',
  '/brand/fatal-1.png',
  '/brand/intercontinental.png',
  '/brand/hilton.png',
  '/brand/meridien.png',
  '/brand/photographe-mariage-video-mariage.png',
  '/brand/trianon.png',
  '/brand/potel.png',
  '/brand/wagram.png',
  '/brand/westin.png',
  '/brand/pavillon.png',
  '/brand/collectionneur.png'
]

const venuePaths: string[] = [
  '/brand/intercontinental.png',
  '/brand/hilton.png',
  '/brand/meridien.png',
  '/brand/trianon.png',
  '/brand/potel.png',
  '/brand/wagram.png',
  '/brand/westin.png',
  '/brand/pavillon.png',
  '/brand/collectionneur.png'
]

export const useBrandLogos = (): string[] => brandPaths.map(withBaseUrl)

export const useVenueLogos = (): string[] => venuePaths.map(withBaseUrl)

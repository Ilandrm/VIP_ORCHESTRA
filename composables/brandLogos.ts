const brandPaths: string[] = [
  '/brand/logos_blancs/charles-traiteur.png',
  '/brand/logos_blancs/fattal-hotels.png',
  '/brand/logos_blancs/intercontinental.png',
  '/brand/logos_blancs/hilton.png',
  '/brand/logos_blancs/le-meridien.png',
  '/brand/logos_blancs/photographe-mariage-video.png',
  '/brand/logos_blancs/hotel-trianon-rive-gauche.png',
  '/brand/logos_blancs/groupe-potel-et-chabot.png',
  '/brand/logos_blancs/westin.png',
  '/brand/logos_blancs/pavillon-royal.png',
  '/brand/logos_blancs/hotel-du-collectionneur.png',
  '/brand/logos_blancs/chateauform.png',
]

const venuePaths: string[] = [
  '/brand/logos_blancs/intercontinental.png',
  '/brand/logos_blancs/hilton.png',
  '/brand/logos_blancs/le-meridien.png',
  '/brand/logos_blancs/hotel-trianon-rive-gauche.png',
  '/brand/logos_blancs/groupe-potel-et-chabot.png',
  '/brand/logos_blancs/westin.png',
  '/brand/logos_blancs/pavillon-royal.png',
  '/brand/logos_blancs/hotel-du-collectionneur.png'
]

export const useBrandLogos = (): string[] => brandPaths.map(withBaseUrl)

export const useVenueLogos = (): string[] => venuePaths.map(withBaseUrl)

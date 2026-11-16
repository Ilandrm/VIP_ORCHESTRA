const brandPaths: string[] = [
  '/brand/logos_societes/porsche.jpg',
  '/brand/logos_societes/hsbc.png',
  '/brand/logos_societes/zimmermann.png',
  '/brand/logos_societes/ideal-audition.png',
  '/brand/logos_societes/credit-agricole.png',
  '/brand/logos_societes/fendi.jpg',
  '/brand/logos_societes/jp-morgan.png',
  '/brand/logos_societes/lvmh.jpg',
  '/brand/logos_societes/laduree.png',
  '/brand/logos_societes/loreal.png',
  '/brand/logos_societes/dassault-systemes.png',
  '/brand/logos_societes/accor.png',
]

const venuePaths: string[] = [
  '/brand/logos_societes/accor.png',
  '/brand/logos_societes/hsbc.png',
  '/brand/logos_societes/jp-morgan.png',
  '/brand/logos_societes/lvmh.png',
  '/brand/logos_societes/loreal.png',
  '/brand/logos_societes/dassault-systemes.png',
]

export const useBrandLogos = (): string[] => brandPaths.map(withBaseUrl)

export const useVenueLogos = (): string[] => venuePaths.map(withBaseUrl)

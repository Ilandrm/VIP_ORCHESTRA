/**
 * Préfixe un chemin public (ex. /images/logo.png) avec la baseURL de l'app
 * (ex. /VIP_ORCHESTRA/ sur GitHub Pages). Les URL externes sont ignorées.
 */
export const withBaseUrl = (path: string): string => {
  if (/^(https?:|data:|blob:)/.test(path)) return path
  const base = useRuntimeConfig().app.baseURL
  return `${base.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

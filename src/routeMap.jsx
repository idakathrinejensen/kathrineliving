export const routeMap = [
  { en: '/home', da: '/' },
  { en: '/inspiration', da: '/inspiration' },
  { en: '/how-and-price', da: '/hvordan-og-pris' },
  { en: '/what-customers-say', da: '/det-siger-kunderne' },
  { en: '/about', da: '/om' },
  { en: '/contact', da: '/kontakt' },
]

export function getAlternatePath (currentPath, targetLang) {
  const entry = routeMap.find(
    (r) => r.en === currentPath || r.da === currentPath
  )
  if (!entry) return targetLang === 'en' ? '/home' : '/'
  return entry[targetLang]
}
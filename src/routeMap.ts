type Language = 'en' | 'da'

type RouteEntry = {
    en: string
    da: string
}

export const routeMap: RouteEntry[] = [
    { en: '/home', da: '/' },
    { en: '/reviews-and-references', da: '/indtryk-og-referencer' },
    { en: '/how-and-price', da: '/hvordan-og-pris' },
    { en: '/about', da: '/om' },
    { en: '/contact', da: '/kontakt' },
]

export function getAlternatePath(
    currentPath: string,
    targetLang: Language
) {
    const entry = routeMap.find(
        (r) => r.en === currentPath || r.da === currentPath
    )

    if (!entry) return targetLang === 'en' ? '/home' : '/'

    return entry[targetLang]
}

export function getLanguageFromPath(path: string): Language {
    if (
        path === '/home' ||
        path.startsWith('/home/') ||
        path === '/reviews-and-references' ||
        path.startsWith('/reviews-and-references/') ||
        path === '/how-and-price' ||
        path.startsWith('/how-and-price/') ||
        path === '/about' ||
        path.startsWith('/about/') ||
        path === '/contact' ||
        path.startsWith('/contact/')
    ) {
        return 'en'
    }

    return 'da'
}
import { parseDate as chronoParse } from 'chrono-node'
import { MILLISECOND_BREAKPOINTS } from './constants'

export function parseDate(input: Date | string | number): Date {
    if (input instanceof Date) return input

    if (typeof input == 'number') return new Date(input)

    return chronoParse(input)
}

export function calculateDifference(date: Date, relative: Date): number {
    const dateInMilliseconds = date.getTime()
    const relativeInMilliseconds = relative.getTime()

    return Math.floor(+relativeInMilliseconds - +dateInMilliseconds)
}

export function formatBreakpoint(difference: number, breakpointIndex: number): number {
    return Math.floor(difference / MILLISECOND_BREAKPOINTS[breakpointIndex])
}

export function parseLocale(locale?: string) {
    let parsedLocale = locale

    if (!parsedLocale && typeof window !== 'undefined') {
        parsedLocale = window.navigator.language
    }

    if (!parsedLocale && process.env.LOCALE) {
        parsedLocale = process.env.LOCALE
    }

    if (parsedLocale) {
        parsedLocale = parsedLocale
            .replace(/_/, '-')
            .replace(/-([a-z]{2})$/, (_m, p1) => '-' + p1.toUpperCase())
    } else {
        parsedLocale = 'en-US'
    }

    return parsedLocale
}

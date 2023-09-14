import { formatBreakpoint } from '../core'

class de_DE {
    static locale = 'de-DE'

    static breakpoints = ['Sekunde', 'Minute', 'Stunde', 'Tag', 'Woche', 'Monat', 'Jahr']

    static breakpointsShort = ['Gestern um', 'Heute um', 'Morgen um']

    static now = ['gerade eben', 'gerade jetzt']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        let unit
        if ([3, 5, 6].includes(unitIndex)) {
            unit = `${de_DE.breakpoints[unitIndex]}${formattedDifference > 1 ? 'en' : ''}`
        } else {
            unit = `${de_DE.breakpoints[unitIndex]}${formattedDifference > 1 ? 'n' : ''}`
        }
        return [`vor ${formattedDifference} ${unit}`, `in ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${de_DE.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('de-DE')}`
    }
}

export { de_DE }

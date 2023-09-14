import { formatBreakpoint } from '../core'

class nl_NL {
    static locale = 'nl-NL'

    static breakpoints = [
        ['seconde', 'seconden'],
        ['minuut', 'minuten'],
        ['uur', 'uur'],
        ['dag', 'dagen'],
        ['week', 'weken'],
        ['maand', 'maanden'],
        ['jaar', 'jaar'],
    ]

    static breakpointsShort = ['Gisteren om', 'Vandaag om', 'Morgen om']

    static now = ['zojuist', 'nu']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = nl_NL.breakpoints[unitIndex][formattedDifference === 1 ? 0 : 1]
        return [`${formattedDifference} ${unit} geleden`, `over ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${nl_NL.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('nl-NL')}`
    }
}

export { nl_NL }

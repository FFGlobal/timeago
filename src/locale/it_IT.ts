import { formatBreakpoint } from '../core'

class it_IT {
    static locale = 'it-IT'

    static breakpoints = ['second', 'minuto', 'ora', 'giorno', 'settimana', 'mese', 'anno']

    static breakpointsShort = ['Ieri alle', 'Oggi alle', 'Domani alle']

    static now = ['proprio ora', 'proprio ora']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        let unit
        if ([2, 4].includes(unitIndex)) {
            unit =
                formattedDifference > 1
                    ? `${it_IT.breakpoints[unitIndex].slice(0, -1)}e`
                    : `${it_IT.breakpoints[unitIndex]}`
        } else if (unitIndex === 0) {
            unit =
                formattedDifference > 1
                    ? `${it_IT.breakpoints[unitIndex]}i`
                    : `${it_IT.breakpoints[unitIndex]}`
        } else {
            unit =
                formattedDifference > 1
                    ? `${it_IT.breakpoints[unitIndex].slice(0, -1)}i`
                    : `${it_IT.breakpoints[unitIndex]}`
        }
        return [`${formattedDifference} ${unit} fa`, `tra ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${it_IT.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('it-IT')}`
    }
}

export { it_IT }

import { formatBreakpoint } from '../core'

class fr_FR {
    static locale = 'fr-FR'

    static breakpoints = ['seconde', 'minute', 'heure', 'jour', 'semaine', 'mois', 'an']

    static breakpointsShort = ['Hier à', 'Aujourd\'hui à', 'Demain à']

    static now = ['à l\'instant', 'juste maintenant']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit =
            unitIndex === 5
                ? `${fr_FR.breakpoints[unitIndex]}`
                : `${fr_FR.breakpoints[unitIndex]}${formattedDifference > 1 ? 's' : ''}`
        return [`il y a ${formattedDifference} ${unit}`, `dans ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${fr_FR.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('fr-FR')}`
    }
}

export { fr_FR }

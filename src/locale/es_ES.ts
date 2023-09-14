import { formatBreakpoint } from '../core'

class es_ES {
    static locale = 'es-ES'

    static breakpoints = ['segundo', 'minuto', 'hora', 'día', 'semana', 'mes', 'año']

    static breakpointsShort = ['Ayer a las', 'Hoy a las', 'Mañana a las']

    static now = ['justo ahora', 'ahora mismo']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        let unit
        if (unitIndex === 5) {
            unit = `${es_ES.breakpoints[unitIndex]}${formattedDifference > 1 ? 'es' : ''}`
        } else {
            unit = `${es_ES.breakpoints[unitIndex]}${formattedDifference > 1 ? 's' : ''}`
        }
        return [`hace ${formattedDifference} ${unit}`, `en ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${es_ES.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('es-ES')}`
    }
}

export { es_ES }

import { formatBreakpoint } from '../core'

class pt_BR {
    static locale = 'pt-BR'

    static breakpoints = ['segundo', 'minuto', 'hora', 'dia', 'semana', 'mês', 'ano']

    static breakpointsShort = ['ontem', 'hoje', 'amanhã']

    static now = ['agora mesmo', 'agora']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        let unit;
        if (unitIndex === 5) {
            unit = formattedDifference > 1  ? 'meses' : pt_BR.breakpoints[unitIndex]
        } else {
            unit = `${pt_BR.breakpoints[unitIndex]}${formattedDifference > 1 ? 's' : ''}`
        }
        return [`${formattedDifference} ${unit} atrás`, `em ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${pt_BR.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('pt-BR')}`
    }
}

export { pt_BR }
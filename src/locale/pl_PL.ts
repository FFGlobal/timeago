import { formatBreakpoint } from '../core'

class pl_PL {
    static locale = 'pl-PL'

    static breakpoints = [
        ['sekundę', 'sekund'],
        ['minutę', 'minut'],
        ['godzinę', 'godzin'],
        ['dzień', 'dni'],
        ['tydzień', 'tygodni'],
        ['miesiąc', 'miesięcy'],
        ['rok', 'lat'],
    ]

    static breakpointsShort = ['Wczoraj o', 'Dzisiaj o', 'Jutro o']

    static now = ['w tej chwili', 'za chwilę']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = pl_PL.breakpoints[unitIndex][formattedDifference === 1 ? 0 : 1]
        return [`${formattedDifference} ${unit} temu`, `za ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${pl_PL.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('pl-PL')}`
    }
}

export { pl_PL }

import { formatBreakpoint } from '../core'

class tr_TR {
    static locale = 'tr-TR'

    static breakpoints = ['saniye', 'dakika', 'saat', 'gün', 'hafta', 'ay', 'yıl']

    static breakpointsShort = ['dün', 'bugün', 'yarın']

    static now = ['az önce', 'şimdi']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = tr_TR.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit} önce`, `${formattedDifference} ${unit} içinde`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${tr_TR.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('tr-TR')}`
    }
}

export { tr_TR }
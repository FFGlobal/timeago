import { formatBreakpoint } from '../core'

class id_ID {
    static locale = 'id-ID'

    static breakpoints = ['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun']

    static breakpointsShort = ['kemarin', 'hari ini', 'besok']

    static now = ['baru saja', 'sebentar lagi']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = id_ID.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit} yang lalu`, `${formattedDifference} ${unit} lagi`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${id_ID.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('id-ID')}`
    }

}

export { id_ID }
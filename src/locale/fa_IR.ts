import { formatBreakpoint } from '../core'

class fa_IR {
    static locale = 'fa-IR'

    static breakpoints = [
        'ثانیه',
        'دقیقه',
        'ساعت',
        'روز',
        'هفته',
        'ماه',
        'سال',
    ]

    static breakpointsShort = ['دیروز', 'امروز', 'فردا']

    static now = ['همین الان', 'همین الان']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = fa_IR.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit} پیش`, `${formattedDifference} ${unit} دیگر`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${fa_IR.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('fa-IR')}`
    }
}

export { fa_IR }
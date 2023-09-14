import { formatBreakpoint } from '../core'

class zh_CN {
    static locale = 'zh-CN'

    static breakpoints = ['秒', '分钟', '小时', '天', '周', '月', '年']

    static breakpointsShort = ['昨天', '今天', '明天']

    static now = ['刚刚', '现在']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = zh_CN.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit}前`, `${formattedDifference} ${unit}后`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${zh_CN.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('zh-CN')}`
    }
}

export { zh_CN }

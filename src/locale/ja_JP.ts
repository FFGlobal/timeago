import { formatBreakpoint } from '../core'

class ja_JP {
    static locale = 'ja-JP'

    static breakpoints = ['秒', '分', '時間', '日', '週間', 'ヶ月', '年']

    static breakpointsShort = ['昨日', '今日', '明日']

    static now = ['たった今', '今から少し後']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = ja_JP.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit}前`, `${formattedDifference} ${unit}後`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${ja_JP.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('ja-JP')}`
    }
}

export { ja_JP }

import { formatBreakpoint } from '../core'

class vi_VN {
    static locale = 'vi-VN'

    static breakpoints = ['giây', 'phút', 'giờ', 'ngày', 'tuần', 'tháng', 'năm']

    static breakpointsShort = ['hôm qua', 'hôm nay', 'ngày mai']

    static now = ['vừa xong', 'ngay bây giờ']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = vi_VN.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit} trước`, `trong ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${vi_VN.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('vi-VN')}`
    }
}

export { vi_VN }
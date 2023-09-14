import { formatBreakpoint } from '../core'

class th_TH {
    static locale = 'th-TH'

    static breakpoints = ['วินาที', 'นาที', 'ชั่วโมง', 'วัน', 'สัปดาห์', 'เดือน', 'ปี']

    static breakpointsShort = ['เมื่อวานนี้', 'วันนี้', 'พรุ่งนี้']

    static now = ['เมื่อสักครู่', 'เมื่อสักครู่']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit = th_TH.breakpoints[unitIndex]
        return [`${formattedDifference} ${unit}ที่แล้ว`, `ใน ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${th_TH.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('th-TH')}`
    }

}

export { th_TH }
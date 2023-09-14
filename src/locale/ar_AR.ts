import { formatBreakpoint } from '../core'

class ar_AR {
    static locale = 'ar-AR'

    static breakpoints = [
        ['ثانية', 'ثانيتين', 'ثوان'],
        ['دقيقة', 'دقيقتين', 'دقائق'],
        ['ساعة', 'ساعتين', 'ساعات'],
        ['يوم', 'يومين', 'أيام'],
        ['أسبوع', 'أسبوعين', 'أسابيع'],
        ['شهر', 'شهرين', 'أشهر'],
        ['سنة', 'سنتين', 'سنوات'],
    ]

    static breakpointsShort = ['أمس', 'اليوم', 'غدا']

        static now = ['الآن', 'الآن']
        
    static format(difference: number, unitIndex: number): [string, string] {
    
        const formattedDifference = formatBreakpoint(difference, unitIndex)
        const unit = ar_AR.breakpoints[unitIndex][formattedDifference === 1 ? 0 : formattedDifference < 3 ? 1 : 2]
        return [`منذ ${formattedDifference} ${unit}`, `بعد ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${ar_AR.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('ar-AR')}`
    }

}

export { ar_AR }
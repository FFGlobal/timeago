import { formatBreakpoint } from '../core'

class en_US {
    static locale = 'en-US'

    static breakpoints = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

    static breakpointsShort = ['Yesterday at', 'Today at', 'Tomorrow at']

    static now = ['just now', 'right now']

    static format(difference: number, unitIndex: number): [string, string] {
        // if (unitIndex === -1) unitIndex = en_US.breakpoints.length - 1
        const formattedDifference = formatBreakpoint(difference, unitIndex)
        const unit = `${en_US.breakpoints[unitIndex]}${formattedDifference > 1 ? 's' : ''}`
        return [`${formattedDifference} ${unit} ago`, `${formattedDifference} ${unit} from now`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${en_US.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('en-US')}`
    }

}

export { en_US }

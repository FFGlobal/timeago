import { formatBreakpoint } from '../core'

class ru_RU {
    static locale = 'ru-RU'

    static breakpoints = [
        ['секунду', 'секунды', 'секунд'],
        ['минуту', 'минуты', 'минут'],
        ['час', 'часа', 'часов'],
        ['день', 'дня', 'дней'],
        ['неделю', 'недели', 'недель'],
        ['месяц', 'месяца', 'месяцев'],
        ['год', 'года', 'лет'],
    ]

    static breakpointsShort = ['Вчера в', 'Сегодня в', 'Завтра в']

    static now = ['только что', 'через мгновение']

    static format(diff: number, unitIndex: number): [string, string] {
        const formattedDifference = formatBreakpoint(diff, unitIndex)
        const unit =
            ru_RU.breakpoints[unitIndex][
                formattedDifference === 1 ? 0 : formattedDifference < 5 ? 1 : 2
            ]
        return [`${formattedDifference} ${unit} назад`, `через ${formattedDifference} ${unit}`]
    }

    static formatShort(date: Date, dayIndex: number, ): string {
        return `${ru_RU.breakpointsShort[dayIndex]} ${date.toLocaleTimeString('ru-RU')}`
    }
}

export { ru_RU }

import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('ru_RU', () => {
    test('только что', () => {
        expect(format(Date.now(), {locale:'ru_RU'})).toBe('только что')
        expect(format(Date.now(), {locale: 'ru_RU', relativeDate: Date.now()})).toBe('только что')

        expect(format(Date.now() - 5000, {locale:'ru_RU'})).toBe('только что')
        expect(format(Date.now() - 5000, {locale: 'ru_RU', relativeDate: new Date})).toBe('только что')
    })

    test('1 минуту назад', () => expect(format(Date.now() - ONE_MINUTE, {locale:'ru_RU'})).toBe('1 минуту назад'))

    test('10 минут назад', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale:'ru_RU'})).toBe('10 минут назад'))

    test('1 час назад', () => expect(format(Date.now() - ONE_HOUR, {locale:'ru_RU'})).toBe('1 час назад'))

    test('10 часов назад', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale:'ru_RU'})).toBe('10 часов назад'))

    test('1 день назад', () => expect(format(Date.now() - ONE_DAY, {locale:'ru_RU'})).toBe('1 день назад'))

    test('1 неделю назад', () =>
        expect(format(Date.now() - ONE_WEEK, {locale:'ru_RU'})).toBe('1 неделю назад'))

    test('1 месяц назад', () =>
        expect(format(Date.now() - ONE_MONTH, {locale:'ru_RU'})).toBe('1 месяц назад'))

    test('10 месяцев назад', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale:'ru_RU'})).toBe('10 месяцев назад'))

    test('1 год назад', () => expect(format(Date.now() - ONE_YEAR, {locale:'ru_RU'})).toBe('1 год назад'))

    test('10 лет назад', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale:'ru_RU'})).toBe('10 лет назад'))

    test('через мгновение', () =>
        expect(format(Date.now() + 5000, {locale:'ru_RU'})).toBe('через мгновение'))

    test('через 30 секунд', () =>
        expect(format(Date.now() + 30000, {locale:'ru_RU'})).toBe('через 30 секунд'))

    test('через 1 минуту', () => expect(format(Date.now() + ONE_MINUTE, {locale:'ru_RU'})).toBe('через 1 минуту'))

    test('через 10 минут', () =>
        expect(format(Date.now() + (ONE_MINUTE * 10), {locale:'ru_RU'})).toBe('через 10 минут'))

    test('через 1 час', () => expect(format(Date.now() + ONE_HOUR, {locale:'ru_RU'})).toBe('через 1 час'))

    test('через 10 часов', () =>
        expect(format(Date.now() + (ONE_HOUR * 10), {locale:'ru_RU'})).toBe('через 10 часов'))

    test('через 1 день', () => expect(format(Date.now() + ONE_DAY, {locale:'ru_RU'})).toBe('через 1 день'))

    test('через 1 неделю', () =>
        expect(format(Date.now() + ONE_WEEK, {locale:'ru_RU'})).toBe('через 1 неделю'))

    test('через 1 месяц', () =>
        expect(format(Date.now() + ONE_MONTH, {locale:'ru_RU'})).toBe('через 1 месяц'))

    test('через 10 месяцев', () =>
        expect(format(Date.now() + (ONE_MONTH * 10), {locale:'ru_RU'})).toBe('через 10 месяцев'))

    test('через 1 год', () => expect(format(Date.now() + ONE_YEAR, {locale:'ru_RU'})).toBe('через 1 год'))

    test('через 10 лет', () =>
        expect(format(Date.now() + (ONE_YEAR * 10), {locale:'ru_RU'})).toBe('через 10 лет'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'ru_RU', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('ru-RU')}`
        )
    })
})

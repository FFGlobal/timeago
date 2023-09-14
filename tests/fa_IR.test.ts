import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('fa_IR', () => {
    test('همین الان', () => {
        expect(format(Date.now(), {locale: 'fa_IR'})).toBe('همین الان')
        expect(format(Date.now(), {locale: 'fa_IR', relativeDate: Date.now()})).toBe('همین الان')

        expect(format(Date.now() - 5000, {locale: 'fa_IR'})).toBe('همین الان')
        expect(format(Date.now() - 5000, {locale: 'fa_IR', relativeDate: new Date})).toBe('همین الان')
    })

    test('1 دقیقه پیش', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'fa_IR'})).toBe('1 دقیقه پیش'))

    test('10 دقیقه پیش', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'fa_IR'})).toBe('10 دقیقه پیش'))

    test('1 ساعت پیش', () => expect(format(Date.now() - ONE_HOUR, {locale: 'fa_IR'})).toBe('1 ساعت پیش'))

    test('10 ساعت پیش', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'fa_IR'})).toBe('10 ساعت پیش'))

    test('1 روز پیش', () => expect(format(Date.now() - ONE_DAY, {locale: 'fa_IR'})).toBe('1 روز پیش'))

    test('1 هفته پیش', () => expect(format(Date.now() - ONE_WEEK, {locale: 'fa_IR'})).toBe('1 هفته پیش'))

    test('1 ماه پیش', () => expect(format(Date.now() - ONE_MONTH, {locale: 'fa_IR'})).toBe('1 ماه پیش'))

    test('10 ماه پیش', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'fa_IR'})).toBe('10 ماه پیش'))

    test('1 سال پیش', () => expect(format(Date.now() - ONE_YEAR, {locale: 'fa_IR'})).toBe('1 سال پیش'))

    test('10 سال پیش', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'fa_IR'})).toBe('10 سال پیش'))

    test('همین الان', () => expect(format(Date.now() + 5000, {locale: 'fa_IR'})).toBe('همین الان'))

    test('30 ثانیه دیگر', () => expect(format(Date.now() + 30000, {locale: 'fa_IR'})).toBe('30 ثانیه دیگر'))

    test('1 دقیقه دیگر', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'fa_IR'})).toBe('1 دقیقه دیگر'))

    test('10 دقیقه دیگر', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'fa_IR'})).toBe('10 دقیقه دیگر'))

    test('1 ساعت دیگر', () => expect(format(Date.now() + ONE_HOUR, {locale: 'fa_IR'})).toBe('1 ساعت دیگر'))

    test('10 ساعت دیگر', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'fa_IR'})).toBe('10 ساعت دیگر'))

    test('1 روز دیگر', () => expect(format(Date.now() + ONE_DAY, {locale: 'fa_IR'})).toBe('1 روز دیگر'))

    test('1 هفته دیگر', () => expect(format(Date.now() + ONE_WEEK, {locale: 'fa_IR'})).toBe('1 هفته دیگر'))

    test('1 ماه دیگر', () => expect(format(Date.now() + ONE_MONTH, {locale: 'fa_IR'})).toBe('1 ماه دیگر'))

    test('10 ماه دیگر', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'fa_IR'})).toBe('10 ماه دیگر'))

    test('1 سال دیگر', () => expect(format(Date.now() + ONE_YEAR, {locale: 'fa_IR'})).toBe('1 سال دیگر'))

    test('10 سال دیگر', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'fa_IR'})).toBe('10 سال دیگر'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'fa_IR', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('fa-IR')}`
        )
    })
})
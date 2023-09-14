import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('ar_AR', () => {
    test('الآن', () => {
        expect(format(Date.now(), {locale: 'ar_AR'})).toBe('الآن')
        expect(format(Date.now(), {locale: 'ar_AR', relativeDate: Date.now()})).toBe('الآن')

        expect(format(Date.now() - 5000, {locale: 'ar_AR'})).toBe('الآن')
        expect(format(Date.now() - 5000, {locale: 'ar_AR', relativeDate: new Date})).toBe('الآن')
    })

    test('منذ 1 دقيقة', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'ar_AR'})).toBe('منذ 1 دقيقة'))

    test('منذ 10 دقائق', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'ar_AR'})).toBe('منذ 10 دقائق'))

    test('منذ 1 ساعة', () => expect(format(Date.now() - ONE_HOUR, {locale: 'ar_AR'})).toBe('منذ 1 ساعة'))

    test('منذ 10 ساعات', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'ar_AR'})).toBe('منذ 10 ساعات'))

    test('منذ 1 يوم', () => expect(format(Date.now() - ONE_DAY, {locale: 'ar_AR'})).toBe('منذ 1 يوم'))

    test('منذ 1 أسبوع', () => expect(format(Date.now() - ONE_WEEK, {locale: 'ar_AR'})).toBe('منذ 1 أسبوع'))

    test('منذ 1 شهر', () => expect(format(Date.now() - ONE_MONTH, {locale: 'ar_AR'})).toBe('منذ 1 شهر'))

    test('منذ 10 أشهر', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'ar_AR'})).toBe('منذ 10 أشهر'))

    test('منذ 1 سنة', () => expect(format(Date.now() - ONE_YEAR, {locale: 'ar_AR'})).toBe('منذ 1 سنة'))

    test('منذ 10 سنوات', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'ar_AR'})).toBe('منذ 10 سنوات'))

    test('الآن', () => expect(format(Date.now() + 5000, {locale: 'ar_AR'})).toBe('الآن'))
    
    test('بعد 30 ثوان', () => expect(format(Date.now() + 30000, {locale: 'ar_AR'})).toBe('بعد 30 ثوان'))

    test('بعد 1 دقيقة', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'ar_AR'})).toBe('بعد 1 دقيقة'))

    test('بعد 10 دقائق', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'ar_AR'})).toBe('بعد 10 دقائق'))

    test('بعد 1 ساعة', () => expect(format(Date.now() + ONE_HOUR, {locale: 'ar_AR'})).toBe('بعد 1 ساعة'))

    test('بعد 10 ساعات', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'ar_AR'})).toBe('بعد 10 ساعات'))

    test('بعد 1 يوم', () => expect(format(Date.now() + ONE_DAY, {locale: 'ar_AR'})).toBe('بعد 1 يوم'))

    test('بعد 1 أسبوع', () => expect(format(Date.now() + ONE_WEEK, {locale: 'ar_AR'})).toBe('بعد 1 أسبوع'))

    test('بعد 1 شهر', () => expect(format(Date.now() + ONE_MONTH, {locale: 'ar_AR'})).toBe('بعد 1 شهر'))

    test('بعد 10 أشهر', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'ar_AR'})).toBe('بعد 10 أشهر'))

    test('بعد 1 سنة', () => expect(format(Date.now() + ONE_YEAR, {locale: 'ar_AR'})).toBe('بعد 1 سنة'))

    test('بعد 10 سنوات', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'ar_AR'})).toBe('بعد 10 سنوات'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'ar_AR', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('ar-EG')}`
        )
    })

})

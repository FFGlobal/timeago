import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('nl_NL', () => {
    test('zojuist', () => {
        expect(format(Date.now(), {locale: 'nl_NL'})).toBe('zojuist')
        expect(format(Date.now(), {locale: 'nl_NL', relativeDate: Date.now()})).toBe('zojuist')

        expect(format(Date.now() - 5000, {locale: 'nl_NL'})).toBe('zojuist')
        expect(format(Date.now() - 5000, {locale: 'nl_NL', relativeDate: new Date})).toBe('zojuist')
    })

    test('1 minuut geleden', () =>
        expect(format(Date.now() - ONE_MINUTE, {locale: 'nl_NL'})).toBe('1 minuut geleden'))

    test('10 minuten geleden', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'nl_NL'})).toBe('10 minuten geleden'))

    test('1 uur geleden', () => expect(format(Date.now() - ONE_HOUR, {locale: 'nl_NL'})).toBe('1 uur geleden'))

    test('10 uur geleden', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'nl_NL'})).toBe('10 uur geleden'))

    test('1 dag geleden', () =>
        expect(format(Date.now() - ONE_DAY, {locale: 'nl_NL'})).toBe('1 dag geleden'))

    test('1 week geleden', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'nl_NL'})).toBe('1 week geleden'))

    test('1 maand geleden', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'nl_NL'})).toBe('1 maand geleden'))

    test('10 maanden geleden', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'nl_NL'})).toBe('10 maanden geleden'))

    test('1 jaar geleden', () =>
        expect(format(Date.now() - ONE_YEAR, {locale: 'nl_NL'})).toBe('1 jaar geleden'))

    test('10 jaar geleden', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'nl_NL'})).toBe('10 jaar geleden'))

    test('nu', () => expect(format(Date.now() + 5000, {locale: 'nl_NL'})).toBe('nu'))

    test('over 30 seconden', () =>
        expect(format(Date.now() + 30000, {locale: 'nl_NL'})).toBe('over 30 seconden'))

    test('over 1 minuut', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'nl_NL'})).toBe('over 1 minuut'))

    test('over 10 minuten', () =>
        expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'nl_NL'})).toBe('over 10 minuten'))

    test('over 1 uur', () => expect(format(Date.now() + ONE_HOUR, {locale: 'nl_NL'})).toBe('over 1 uur'))

    test('over 10 uur', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'nl_NL'})).toBe('over 10 uur'))

    test('over 1 dag', () => expect(format(Date.now() + ONE_DAY, {locale: 'nl_NL'})).toBe('over 1 dag'))

    test('over 1 week', () => expect(format(Date.now() + ONE_WEEK, {locale: 'nl_NL'})).toBe('over 1 week'))

    test('over 1 maand', () =>
        expect(format(Date.now() + ONE_MONTH, {locale: 'nl_NL'})).toBe('over 1 maand'))

    test('over 10 maanden', () =>
        expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'nl_NL'})).toBe('over 10 maanden'))

    test('over 1 jaar', () => expect(format(Date.now() + ONE_YEAR, {locale: 'nl_NL'})).toBe('over 1 jaar'))

    test('over 10 jaar', () =>
        expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'nl_NL'})).toBe('over 10 jaar'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'nl_NL', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('nl-NL')}`
        )
    })
})

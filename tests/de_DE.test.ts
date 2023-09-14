import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('de_DE', () => {
    test('gerade eben', () => {
        expect(format(Date.now(), {locale: 'de_DE'})).toBe('gerade eben')
        expect(format(Date.now(), {locale: 'de_DE', relativeDate: Date.now()})).toBe('gerade eben')
        expect(format(Date.now() - 5000, {locale: 'de_DE'})).toBe('gerade eben')
        expect(format(Date.now() - 5000, {locale: 'de_DE', relativeDate: new Date()})).toBe('gerade eben')
    })

    test('vor 1 Minute', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'de_DE'})).toBe('vor 1 Minute'))

    test('vor 10 Minuten', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'de_DE'})).toBe('vor 10 Minuten'))

    test('vor 1 Stunde', () => expect(format(Date.now() - ONE_HOUR, {locale: 'de_DE'})).toBe('vor 1 Stunde'))

    test('vor 10 Stunden', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'de_DE'})).toBe('vor 10 Stunden'))

    test('vor 1 Tag', () => expect(format(Date.now() - ONE_DAY, {locale: 'de_DE'})).toBe('vor 1 Tag'))

    test('vor 1 Woche', () => expect(format(Date.now() - ONE_WEEK, {locale: 'de_DE'})).toBe('vor 1 Woche'))

    test('vor 1 Monat', () => expect(format(Date.now() - ONE_MONTH, {locale: 'de_DE'})).toBe('vor 1 Monat'))

    test('vor 10 Monaten', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'de_DE'})).toBe('vor 10 Monaten'))

    test('vor 1 Jahr', () => expect(format(Date.now() - ONE_YEAR, {locale: 'de_DE'})).toBe('vor 1 Jahr'))

    test('vor 10 Jahren', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'de_DE'})).toBe('vor 10 Jahren'))

    test('gerade jetzt', () => expect(format(Date.now() + 5000, {locale: 'de_DE'})).toBe('gerade jetzt'))

    test('in 30 Sekunden', () => expect(format(Date.now() + (THIRTY_SECONDS), {locale: 'de_DE'})).toBe('in 30 Sekunden'))

    test('in 1 Minute', () => expect(format(Date.now() + (ONE_MINUTE), {locale: 'de_DE'})).toBe('in 1 Minute'))

    test('in 10 Minuten', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'de_DE'})).toBe('in 10 Minuten'))

    test('in 1 Stunde', () => expect(format(Date.now() + ONE_HOUR, {locale: 'de_DE'})).toBe('in 1 Stunde'))

    test('in 10 Stunden', () =>
        expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'de_DE'})).toBe('in 10 Stunden'))

    test('in 1 Tag', () => expect(format(Date.now() + ONE_DAY, {locale: 'de_DE'})).toBe('in 1 Tag'))

    test('in 1 Woche', () => expect(format(Date.now() + ONE_WEEK, {locale: 'de_DE'})).toBe('in 1 Woche'))

    test('in 1 Monat', () => expect(format(Date.now() + ONE_MONTH, {locale: 'de_DE'})).toBe('in 1 Monat'))

    test('in 10 Monaten', () =>
        expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'de_DE'})).toBe('in 10 Monaten'))

    test('in 1 Jahr', () => expect(format(Date.now() + ONE_YEAR, {locale: 'de_DE'})).toBe('in 1 Jahr'))

    test('in 10 Jahren', () =>
        expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'de_DE'})).toBe('in 10 Jahren'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'de_DE', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('de-DE')}`
        )
    })
})

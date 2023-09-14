import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('it_IT', () => {
    test('proprio ora', () => {
        expect(format(Date.now(), {locale: 'it_IT'})).toBe('proprio ora')
        expect(format(Date.now(), {locale: 'it_IT', relativeDate: Date.now()})).toBe('proprio ora')

        expect(format(Date.now() - 5000, {locale: 'it_IT'})).toBe('proprio ora')
        expect(format(Date.now() - 5000, {locale: 'it_IT', relativeDate: new Date})).toBe('proprio ora')
    })

    test('1 minuto fa', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'it_IT'})).toBe('1 minuto fa'))

    test('10 minuti fa', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'it_IT'})).toBe('10 minuti fa'))

    test('1 ora fa', () => expect(format(Date.now() - ONE_HOUR, {locale: 'it_IT'})).toBe('1 ora fa'))

    test('10 ore fa', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'it_IT'})).toBe('10 ore fa'))

    test('1 giorno fa', () => expect(format(Date.now() - ONE_DAY, {locale: 'it_IT'})).toBe('1 giorno fa'))

    test('1 settimana fa', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'it_IT'})).toBe('1 settimana fa'))

    test('1 mese fa', () => expect(format(Date.now() - ONE_MONTH, {locale: 'it_IT'})).toBe('1 mese fa'))

    test('10 mesi fa', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'it_IT'})).toBe('10 mesi fa'))

    test('1 anno fa', () => expect(format(Date.now() - ONE_YEAR, {locale: 'it_IT'})).toBe('1 anno fa'))

    test('10 anni fa', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'it_IT'})).toBe('10 anni fa'))

    test('proprio ora', () => expect(format(Date.now() + 5000, {locale: 'it_IT'})).toBe('proprio ora'))

    test('tra 30 secondi', () => expect(format(Date.now() + 30000, {locale: 'it_IT'})).toBe('tra 30 secondi'))

    test('tra 1 minuto', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'it_IT'})).toBe('tra 1 minuto'))

    test('tra 10 minuti', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'it_IT'})).toBe('tra 10 minuti'))

    test('tra 1 ora', () => expect(format(Date.now() + ONE_HOUR, {locale: 'it_IT'})).toBe('tra 1 ora'))

    test('tra 10 ore', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'it_IT'})).toBe('tra 10 ore'))

    test('tra 1 giorno', () => expect(format(Date.now() + ONE_DAY, {locale: 'it_IT'})).toBe('tra 1 giorno'))

    test('tra 1 settimana', () => expect(format(Date.now() + ONE_WEEK, {locale: 'it_IT'})).toBe('tra 1 settimana'))

    test('tra 1 mese', () => expect(format(Date.now() + ONE_MONTH, {locale: 'it_IT'})).toBe('tra 1 mese'))

    test('tra 10 mesi', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'it_IT'})).toBe('tra 10 mesi'))

    test('tra 1 anno', () => expect(format(Date.now() + ONE_YEAR, {locale: 'it_IT'})).toBe('tra 1 anno'))

    test('tra 10 anni', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'it_IT'})).toBe('tra 10 anni'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'it_IT', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('it-IT')}`
        )
    }
    )
})

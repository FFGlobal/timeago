import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('pl_PL', () => {
    test('w tej chwili', () => {
        expect(format(Date.now(), {locale: 'pl_PL'})).toBe('w tej chwili')
        expect(format(Date.now(), {locale: 'pl_PL', relativeDate: Date.now()})).toBe('w tej chwili')

        expect(format(Date.now() - 5000, {locale: 'pl_PL'})).toBe('w tej chwili')
        expect(format(Date.now() - 5000, {locale: 'pl_PL', relativeDate: new Date})).toBe('w tej chwili')
    })

    test('1 minutę temu', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'pl_PL'})).toBe('1 minutę temu'))

    test('10 minut temu', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'pl_PL'})).toBe('10 minut temu'))

    test('1 godzinę temu', () =>
        expect(format(Date.now() - ONE_HOUR, {locale: 'pl_PL'})).toBe('1 godzinę temu'))

    test('10 godzin temu', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'pl_PL'})).toBe('10 godzin temu'))

    test('1 dzień temu', () => expect(format(Date.now() - ONE_DAY, {locale: 'pl_PL'})).toBe('1 dzień temu'))

    test('1 tydzień temu', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'pl_PL'})).toBe('1 tydzień temu'))

    test('1 miesiąc temu', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'pl_PL'})).toBe('1 miesiąc temu'))

    test('10 miesięcy temu', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'pl_PL'})).toBe('10 miesięcy temu'))

    test('1 rok temu', () => expect(format(Date.now() - ONE_YEAR, {locale: 'pl_PL'})).toBe('1 rok temu'))

    test('10 lat temu', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'pl_PL'})).toBe('10 lat temu'))

    test('za chwilę', () => expect(format(Date.now() + 5000, {locale: 'pl_PL'})).toBe('za chwilę'))

    test('za 30 sekund', () => expect(format(Date.now() + 30000, {locale: 'pl_PL'})).toBe('za 30 sekund'))

    test('za 1 minutę', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'pl_PL'})).toBe('za 1 minutę'))

    test('za 10 minut', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'pl_PL'})).toBe('za 10 minut'))

    test('za 1 godzinę', () => expect(format(Date.now() + ONE_HOUR, {locale: 'pl_PL'})).toBe('za 1 godzinę'))

    test('za 10 godzin', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'pl_PL'})).toBe('za 10 godzin'))

    test('za 1 dzień', () => expect(format(Date.now() + ONE_DAY, {locale: 'pl_PL'})).toBe('za 1 dzień'))

    test('za 1 tydzień', () => expect(format(Date.now() + ONE_WEEK, {locale: 'pl_PL'})).toBe('za 1 tydzień'))

    test('za 1 miesiąc', () =>
        expect(format(Date.now() + ONE_MONTH, {locale: 'pl_PL'})).toBe('za 1 miesiąc'))

    test('za 10 miesięcy', () =>
        expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'pl_PL'})).toBe('za 10 miesięcy'))

    test('za 1 rok', () => expect(format(Date.now() + ONE_YEAR, {locale: 'pl_PL'})).toBe('za 1 rok'))

    test('za 10 lat', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'pl_PL'})).toBe('za 10 lat'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'pl_PL', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('pl-PL')}`
        )
    })
})

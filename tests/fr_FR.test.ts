import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('fr_FR', () => {
    test("à l'instant", () => {
        expect(format(Date.now(), {locale: 'fr_FR'})).toBe("à l'instant")
        expect(format(Date.now(), {locale: 'fr_FR', relativeDate: Date.now()})).toBe("à l'instant")

        expect(format(Date.now() - 5000, {locale: 'fr_FR'})).toBe("à l'instant")
        expect(format(Date.now() - 5000, {locale: 'fr_FR', relativeDate: new Date})).toBe("à l'instant")
    })

    test('il y a 1 minute', () =>
        expect(format(Date.now() - ONE_MINUTE, {locale: 'fr_FR'})).toBe('il y a 1 minute'))

    test('il y a 10 minutes', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'fr_FR'})).toBe('il y a 10 minutes'))

    test('il y a 1 heure', () =>
        expect(format(Date.now() - ONE_HOUR, {locale: 'fr_FR'})).toBe('il y a 1 heure'))

    test('il y a 10 heures', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'fr_FR'})).toBe('il y a 10 heures'))

    test('il y a 1 jour', () =>
        expect(format(Date.now() - ONE_DAY, {locale: 'fr_FR'})).toBe('il y a 1 jour'))

    test('il y a 1 semaine', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'fr_FR'})).toBe('il y a 1 semaine'))

    test('il y a 1 mois', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'fr_FR'})).toBe('il y a 1 mois'))

    test('il y a 10 mois', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'fr_FR'})).toBe('il y a 10 mois'))

    test('il y a 1 an', () => expect(format(Date.now() - ONE_YEAR, {locale: 'fr_FR'})).toBe('il y a 1 an'))

    test('il y a 10 ans', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'fr_FR'})).toBe('il y a 10 ans'))

    test('juste maintenant', () =>
        expect(format(Date.now() + 5000, {locale: 'fr_FR'})).toBe('juste maintenant'))

    test('dans 30 secondes', () =>
        expect(format(Date.now() + 30000, {locale: 'fr_FR'})).toBe('dans 30 secondes'))

    test('dans 1 minute', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'fr_FR'})).toBe('dans 1 minute'))

    test('dans 10 minutes', () =>
        expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'fr_FR'})).toBe('dans 10 minutes'))

    test('dans 1 heure', () => expect(format(Date.now() + ONE_HOUR, {locale: 'fr_FR'})).toBe('dans 1 heure'))

    test('dans 10 heures', () =>
        expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'fr_FR'})).toBe('dans 10 heures'))

    test('dans 1 jour', () => expect(format(Date.now() + ONE_DAY, {locale: 'fr_FR'})).toBe('dans 1 jour'))

    test('dans 1 semaine', () =>
        expect(format(Date.now() + ONE_WEEK, {locale: 'fr_FR'})).toBe('dans 1 semaine'))

    test('dans 1 mois', () => expect(format(Date.now() + ONE_MONTH, {locale: 'fr_FR'})).toBe('dans 1 mois'))

    test('dans 10 mois', () =>
        expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'fr_FR'})).toBe('dans 10 mois'))

    test('dans 1 an', () => expect(format(Date.now() + ONE_YEAR, {locale: 'fr_FR'})).toBe('dans 1 an'))

    test('dans 10 ans', () =>
        expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'fr_FR'})).toBe('dans 10 ans'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'fr_FR',lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('fr-FR')}`
        )
    })
})

import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('tr_TR', () => {
    test('az önce', () => {
        expect(format(Date.now(), {locale: 'tr_TR'})).toBe('az önce')
        expect(format(Date.now(), {locale: 'tr_TR', relativeDate: Date.now()})).toBe('az önce')

        expect(format(Date.now() - 5000, {locale: 'tr_TR'})).toBe('az önce')
        expect(format(Date.now() - 5000, {locale: 'tr_TR', relativeDate: new Date})).toBe('az önce')
    })

    test('1 dakika önce', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'tr_TR'})).toBe('1 dakika önce'))

    test('10 dakika önce', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'tr_TR'})).toBe('10 dakika önce'))

    test('1 saat önce', () => expect(format(Date.now() - ONE_HOUR, {locale: 'tr_TR'})).toBe('1 saat önce'))

    test('10 saat önce', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'tr_TR'})).toBe('10 saat önce'))

    test('1 gün önce', () => expect(format(Date.now() - ONE_DAY, {locale: 'tr_TR'})).toBe('1 gün önce'))

    test('1 hafta önce', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'tr_TR'})).toBe('1 hafta önce'))

    test('1 ay önce', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'tr_TR'})).toBe('1 ay önce'))

    test('10 ay önce', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'tr_TR'})).toBe('10 ay önce'))

    test('1 yıl önce', () => expect(format(Date.now() - ONE_YEAR, {locale: 'tr_TR'})).toBe('1 yıl önce'))

    test('10 yıl önce', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'tr_TR'})).toBe('10 yıl önce'))

    test('şimdi', () => expect(format(Date.now() + 5000, {locale: 'tr_TR'})).toBe('şimdi'))

    test('30 saniye içinde', () => expect(format(Date.now() + 30000, {locale: 'tr_TR'})).toBe('30 saniye içinde'))

    test('1 dakika içinde', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'tr_TR'})).toBe('1 dakika içinde'))

    test('10 dakika içinde', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'tr_TR'})).toBe('10 dakika içinde'))

    test('1 saat içinde', () => expect(format(Date.now() + ONE_HOUR, {locale: 'tr_TR'})).toBe('1 saat içinde'))

    test('10 saat içinde', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'tr_TR'})).toBe('10 saat içinde'))

    test('1 gün içinde', () => expect(format(Date.now() + ONE_DAY, {locale: 'tr_TR'})).toBe('1 gün içinde'))

    test('1 hafta içinde', () => expect(format(Date.now() + ONE_WEEK, {locale: 'tr_TR'})).toBe('1 hafta içinde'))

    test('1 ay içinde', () => expect(format(Date.now() + ONE_MONTH, {locale: 'tr_TR'})).toBe('1 ay içinde'))

    test('10 ay içinde', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'tr_TR'})).toBe('10 ay içinde'))

    test('1 yıl içinde', () => expect(format(Date.now() + ONE_YEAR, {locale: 'tr_TR'})).toBe('1 yıl içinde'))

    test('10 yıl içinde', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'tr_TR'})).toBe('10 yıl içinde'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'tr_TR', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('tr-TR')}`
        )
    })

})
    

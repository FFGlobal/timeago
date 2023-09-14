import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('id_ID', () => {
    test('baru saja', () => {
        expect(format(Date.now(), {locale: 'id_ID'})).toBe('baru saja')
        expect(format(Date.now(), {locale: 'id_ID', relativeDate: Date.now()})).toBe('baru saja')

        expect(format(Date.now() - 5000, {locale: 'id_ID'})).toBe('baru saja')
        expect(format(Date.now() - 5000, {locale: 'id_ID', relativeDate: new Date})).toBe('baru saja')
    }) 

    test('1 menit yang lalu', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'id_ID'})).toBe('1 menit yang lalu'))

    test('10 menit yang lalu', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'id_ID'})).toBe('10 menit yang lalu'))

    test('1 jam yang lalu', () => expect(format(Date.now() - ONE_HOUR, {locale: 'id_ID'})).toBe('1 jam yang lalu'))

    test('10 jam yang lalu', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'id_ID'})).toBe('10 jam yang lalu'))

    test('1 hari yang lalu', () => expect(format(Date.now() - ONE_DAY, {locale: 'id_ID'})).toBe('1 hari yang lalu'))

    test('1 minggu yang lalu', () => expect(format(Date.now() - ONE_WEEK, {locale: 'id_ID'})).toBe('1 minggu yang lalu'))

    test('1 bulan yang lalu', () => expect(format(Date.now() - ONE_MONTH, {locale: 'id_ID'})).toBe('1 bulan yang lalu'))

    test('10 bulan yang lalu', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'id_ID'})).toBe('10 bulan yang lalu'))

    test('1 tahun yang lalu', () => expect(format(Date.now() - ONE_YEAR, {locale: 'id_ID'})).toBe('1 tahun yang lalu'))

    test('10 tahun yang lalu', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'id_ID'})).toBe('10 tahun yang lalu'))

    test('sebentar lagi', () => expect(format(Date.now() + 5000, {locale: 'id_ID'})).toBe('sebentar lagi'))

    test('30 detik lagi', () => expect(format(Date.now() + 30000, {locale: 'id_ID'})).toBe('30 detik lagi'))

    test('1 menit lagi', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'id_ID'})).toBe('1 menit lagi'))

    test('10 menit lagi', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'id_ID'})).toBe('10 menit lagi'))

    test('1 jam lagi', () => expect(format(Date.now() + ONE_HOUR, {locale: 'id_ID'})).toBe('1 jam lagi'))

    test('10 jam lagi', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'id_ID'})).toBe('10 jam lagi'))

    test('1 hari lagi', () => expect(format(Date.now() + ONE_DAY, {locale: 'id_ID'})).toBe('1 hari lagi'))

    test('1 minggu lagi', () => expect(format(Date.now() + ONE_WEEK, {locale: 'id_ID'})).toBe('1 minggu lagi'))

    test('1 bulan lagi', () => expect(format(Date.now() + ONE_MONTH, {locale: 'id_ID'})).toBe('1 bulan lagi'))

    test('10 bulan lagi', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'id_ID'})).toBe('10 bulan lagi'))

    test('1 tahun lagi', () => expect(format(Date.now() + ONE_YEAR, {locale: 'id_ID'})).toBe('1 tahun lagi'))

    test('10 tahun lagi', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'id_ID'})).toBe('10 tahun lagi'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'id_ID', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('id-ID')}`
        )
    })
})


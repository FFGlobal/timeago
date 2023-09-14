import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('th_TH', () => {
    test('เมื่อสักครู่', () => {
        expect(format(Date.now(), {locale: 'th_TH'})).toBe('เมื่อสักครู่')
        expect(format(Date.now(), {locale: 'th_TH', relativeDate: Date.now()})).toBe('เมื่อสักครู่')

        expect(format(Date.now() - 5000, {locale: 'th_TH'})).toBe('เมื่อสักครู่')
        expect(format(Date.now() - 5000, {locale: 'th_TH', relativeDate: new Date})).toBe('เมื่อสักครู่')
    })

    test('1 นาทีที่แล้ว', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'th_TH'})).toBe('1 นาทีที่แล้ว'))

    test('10 นาทีที่แล้ว', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'th_TH'})).toBe('10 นาทีที่แล้ว'))

    test('1 ชั่วโมงที่แล้ว', () => expect(format(Date.now() - ONE_HOUR, {locale: 'th_TH'})).toBe('1 ชั่วโมงที่แล้ว'))

    test('10 ชั่วโมงที่แล้ว', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'th_TH'})).toBe('10 ชั่วโมงที่แล้ว'))

    test('1 วันที่แล้ว', () => expect(format(Date.now() - ONE_DAY, {locale: 'th_TH'})).toBe('1 วันที่แล้ว'))

    test('1 สัปดาห์ที่แล้ว', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'th_TH'})).toBe('1 สัปดาห์ที่แล้ว'))

    test('1 เดือนที่แล้ว', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'th_TH'})).toBe('1 เดือนที่แล้ว'))

    test('10 เดือนที่แล้ว', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'th_TH'})).toBe('10 เดือนที่แล้ว'))

    test('1 ปีที่แล้ว', () => expect(format(Date.now() - ONE_YEAR, {locale: 'th_TH'})).toBe('1 ปีที่แล้ว'))

    test('10 ปีที่แล้ว', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'th_TH'})).toBe('10 ปีที่แล้ว'))

    test('เมื่อสักครู่', () => expect(format(Date.now() + 5000, {locale: 'th_TH'})).toBe('เมื่อสักครู่'))

    test('ใน 30 วินาที', () =>
        expect(format(Date.now() + 30000, {locale: 'th_TH'})).toBe('ใน 30 วินาที'))

    test('ใน 1 นาที', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'th_TH'})).toBe('ใน 1 นาที'))

    test('ใน 10 นาที', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'th_TH'})).toBe('ใน 10 นาที'))

    test('ใน 1 ชั่วโมง', () => expect(format(Date.now() + ONE_HOUR, {locale: 'th_TH'})).toBe('ใน 1 ชั่วโมง'))

    test('ใน 10 ชั่วโมง', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'th_TH'})).toBe('ใน 10 ชั่วโมง'))

    test('ใน 1 วัน', () => expect(format(Date.now() + ONE_DAY, {locale: 'th_TH'})).toBe('ใน 1 วัน'))

    test('ใน 1 สัปดาห์', () => expect(format(Date.now() + ONE_WEEK, {locale: 'th_TH'})).toBe('ใน 1 สัปดาห์'))

    test('ใน 1 เดือน', () => expect(format(Date.now() + ONE_MONTH, {locale: 'th_TH'})).toBe('ใน 1 เดือน'))

    test('ใน 10 เดือน', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'th_TH'})).toBe('ใน 10 เดือน'))

    test('ใน 1 ปี', () => expect(format(Date.now() + ONE_YEAR, {locale: 'th_TH'})).toBe('ใน 1 ปี'))

    test('ใน 10 ปี', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'th_TH'})).toBe('ใน 10 ปี'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(
            format(currentTimestamp - (ONE_YEAR * 10), {locale: 'th_TH', lateDeadline: currentTimestamp})
        ).toBe(`${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('th-TH')}`)
    })
})
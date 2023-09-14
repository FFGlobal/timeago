import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('vi_VN', () => {
    test('vừa xong', () => {
        expect(format(Date.now(), {locale: 'vi_VN'})).toBe('vừa xong')
        expect(format(Date.now(), {locale: 'vi_VN', relativeDate: Date.now()})).toBe('vừa xong')

        expect(format(Date.now() - 5000, {locale: 'vi_VN'})).toBe('vừa xong')
        expect(format(Date.now() - 5000, {locale: 'vi_VN', relativeDate: new Date})).toBe('vừa xong')
    })

    test('1 phút trước', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'vi_VN'})).toBe('1 phút trước'))

    test('10 phút trước', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'vi_VN'})).toBe('10 phút trước'))

    test('1 giờ trước', () => expect(format(Date.now() - ONE_HOUR, {locale: 'vi_VN'})).toBe('1 giờ trước'))

    test('10 giờ trước', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'vi_VN'})).toBe('10 giờ trước'))

    test('1 ngày trước', () => expect(format(Date.now() - ONE_DAY, {locale: 'vi_VN'})).toBe('1 ngày trước'))

    test('1 tuần trước', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'vi_VN'})).toBe('1 tuần trước'))

    test('1 tháng trước', () =>
        expect(format(Date.now() - ONE_MONTH, {locale: 'vi_VN'})).toBe('1 tháng trước'))

    test('10 tháng trước', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'vi_VN'})).toBe('10 tháng trước'))

    test('1 năm trước', () => expect(format(Date.now() - ONE_YEAR, {locale: 'vi_VN'})).toBe('1 năm trước'))

    test('10 năm trước', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'vi_VN'})).toBe('10 năm trước'))

    test('ngay bây giờ', () => expect(format(Date.now() + 5000, {locale: 'vi_VN'})).toBe('ngay bây giờ'))

    test('trong 30 giây', () => expect(format(Date.now() + 30000, {locale: 'vi_VN'})).toBe('trong 30 giây'))

    test('trong 1 phút', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'vi_VN'})).toBe('trong 1 phút'))

    test('trong 10 phút', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'vi_VN'})).toBe('trong 10 phút'))

    test('trong 1 giờ', () => expect(format(Date.now() + ONE_HOUR, {locale: 'vi_VN'})).toBe('trong 1 giờ'))

    test('trong 10 giờ', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'vi_VN'})).toBe('trong 10 giờ'))

    test('trong 1 ngày', () => expect(format(Date.now() + ONE_DAY, {locale: 'vi_VN'})).toBe('trong 1 ngày'))

    test('trong 1 tuần', () => expect(format(Date.now() + ONE_WEEK, {locale: 'vi_VN'})).toBe('trong 1 tuần'))

    test('trong 1 tháng', () => expect(format(Date.now() + ONE_MONTH, {locale: 'vi_VN'})).toBe('trong 1 tháng'))

    test('trong 10 tháng', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'vi_VN'})).toBe('trong 10 tháng'))

    test('trong 1 năm', () => expect(format(Date.now() + ONE_YEAR, {locale: 'vi_VN'})).toBe('trong 1 năm'))

    test('trong 10 năm', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'vi_VN'})).toBe('trong 10 năm'))

    test('trễ hạn', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'vi_VN', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('vi-VN')}`
        )
    }
    )
})
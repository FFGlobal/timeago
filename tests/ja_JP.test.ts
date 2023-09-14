import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('ja_JP', () => {
    test('たった今', () => {
        expect(format(Date.now(), {locale: 'ja_JP'})).toBe('たった今')
        expect(format(Date.now(), {locale: 'ja_JP', relativeDate: Date.now()})).toBe('たった今')

        expect(format(Date.now() - 5000, {locale: 'ja_JP'})).toBe('たった今')
        expect(format(Date.now() - 5000, {locale: 'ja_JP', relativeDate: new Date})).toBe('たった今')
    })

    test('1 分前', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'ja_JP'})).toBe('1 分前'))

    test('10 分前', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'ja_JP'})).toBe('10 分前'))

    test('1 時間前', () => expect(format(Date.now() - ONE_HOUR, {locale: 'ja_JP'})).toBe('1 時間前'))

    test('10 時間前', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'ja_JP'})).toBe('10 時間前'))

    test('1 日前', () => expect(format(Date.now() - ONE_DAY, {locale: 'ja_JP'})).toBe('1 日前'))

    test('1 週間前', () => expect(format(Date.now() - ONE_WEEK, {locale: 'ja_JP'})).toBe('1 週間前'))

    test('1 ヶ月前', () => expect(format(Date.now() - ONE_MONTH, {locale: 'ja_JP'})).toBe('1 ヶ月前'))

    test('10 ヶ月前', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'ja_JP'})).toBe('10 ヶ月前'))

    test('1 年前', () => expect(format(Date.now() - ONE_YEAR, {locale: 'ja_JP'})).toBe('1 年前'))

    test('10 年前', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'ja_JP'})).toBe('10 年前'))

    test('今から少し後', () => expect(format(Date.now() + 5000, {locale: 'ja_JP'})).toBe('今から少し後'))

    test('30 秒後', () => expect(format(Date.now() + 30000, {locale: 'ja_JP'})).toBe('30 秒後'))

    test('1 分後', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'ja_JP'})).toBe('1 分後'))

    test('10 分後', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'ja_JP'})).toBe('10 分後'))

    test('1 時間後', () => expect(format(Date.now() + ONE_HOUR, {locale: 'ja_JP'})).toBe('1 時間後'))

    test('10 時間後', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'ja_JP'})).toBe('10 時間後'))

    test('1 日後', () => expect(format(Date.now() + ONE_DAY, {locale: 'ja_JP'})).toBe('1 日後'))

    test('1 週間後', () => expect(format(Date.now() + ONE_WEEK, {locale: 'ja_JP'})).toBe('1 週間後'))

    test('1 ヶ月後', () => expect(format(Date.now() + ONE_MONTH, {locale: 'ja_JP'})).toBe('1 ヶ月後'))

    test('10 ヶ月後', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'ja_JP'})).toBe('10 ヶ月後'))

    test('1 年後', () => expect(format(Date.now() + ONE_YEAR, {locale: 'ja_JP'})).toBe('1 年後'))

    test('10 年後', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'ja_JP'})).toBe('10 年後'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'ja_JP', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('ja-JP')}`
        )
    })
})

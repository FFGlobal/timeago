import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('zh_CN', () => {
    test('刚刚', () => {
        expect(format(Date.now(), {locale: 'zh_CN'})).toBe('刚刚')
        expect(format(Date.now(), {locale: 'zh_CN', relativeDate: Date.now()})).toBe('刚刚')

        expect(format(Date.now() - 5000, {locale: 'zh_CN'})).toBe('刚刚')
        expect(format(Date.now() - 5000, {locale: 'zh_CN', relativeDate: new Date})).toBe('刚刚')
    })

    test('1 分钟前', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'zh_CN'})).toBe('1 分钟前'))

    test('10 分钟前', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'zh_CN'})).toBe('10 分钟前'))

    test('1 小时前', () => expect(format(Date.now() - ONE_HOUR, {locale: 'zh_CN'})).toBe('1 小时前'))

    test('10 小时前', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'zh_CN'})).toBe('10 小时前'))

    test('1 天前', () => expect(format(Date.now() - ONE_DAY, {locale: 'zh_CN'})).toBe('1 天前'))

    test('1 周前', () => expect(format(Date.now() - ONE_WEEK, {locale: 'zh_CN'})).toBe('1 周前'))

    test('1 月前', () => expect(format(Date.now() - ONE_MONTH, {locale: 'zh_CN'})).toBe('1 月前'))

    test('10 月前', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'zh_CN'})).toBe('10 月前'))

    test('1 年前', () => expect(format(Date.now() - ONE_YEAR, {locale: 'zh_CN'})).toBe('1 年前'))

    test('10 年前', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'zh_CN'})).toBe('10 年前'))

    test('现在', () => expect(format(Date.now() + 5000, {locale: 'zh_CN'})).toBe('现在'))

    test('30 秒后', () => expect(format(Date.now() + 30000, {locale: 'zh_CN'})).toBe('30 秒后'))

    test('1 分钟后', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'zh_CN'})).toBe('1 分钟后'))

    test('10 分钟后', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'zh_CN'})).toBe('10 分钟后'))

    test('1 小时后', () => expect(format(Date.now() + ONE_HOUR, {locale: 'zh_CN'})).toBe('1 小时后'))

    test('10 小时后', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'zh_CN'})).toBe('10 小时后'))

    test('1 天后', () => expect(format(Date.now() + ONE_DAY, {locale: 'zh_CN'})).toBe('1 天后'))

    test('1 周后', () => expect(format(Date.now() + ONE_WEEK, {locale: 'zh_CN'})).toBe('1 周后'))

    test('1 月后', () => expect(format(Date.now() + ONE_MONTH, {locale: 'zh_CN'})).toBe('1 月后'))

    test('10 月后', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'zh_CN'})).toBe('10 月后'))

    test('1 年后', () => expect(format(Date.now() + ONE_YEAR, {locale: 'zh_CN'})).toBe('1 年后'))

    test('10 年后', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'zh_CN'})).toBe('10 年后'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10),  {locale: 'zh_CN', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('zh-CN')}`
        )
    })
})

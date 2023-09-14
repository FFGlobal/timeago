import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

// beforeEach(() => {

// });

describe('en_US', () => {
    test('just now', () => {
        expect(format(Date.now())).toBe('just now')
        expect(format(Date.now(), {relativeDate: Date.now()})).toBe('just now')

        expect(format(Date.now() - 5000)).toBe('just now')
        expect(format(Date.now() - 5000, {relativeDate: new Date})).toBe('just now')
    })

    test('1 minute ago', () => expect(format(Date.now() - ONE_MINUTE)).toBe('1 minute ago'))

    test('10 minutes ago', () => expect(format(Date.now() - (ONE_MINUTE * 10))).toBe('10 minutes ago'))

    test('1 hour ago', () => expect(format(Date.now() - ONE_HOUR)).toBe('1 hour ago'))

    test('10 hours ago', () => expect(format(Date.now() - (ONE_HOUR * 10))).toBe('10 hours ago'))

    test('1 day ago', () => expect(format(Date.now() - ONE_DAY)).toBe('1 day ago'))

    test('1 week ago', () => expect(format(Date.now() - ONE_WEEK)).toBe('1 week ago'))

    test('1 month ago', () => expect(format(Date.now() - ONE_MONTH)).toBe('1 month ago'))

    test('10 months ago', () => expect(format(Date.now() - (ONE_MONTH * 10))).toBe('10 months ago'))

    test('1 year ago', () => expect(format(Date.now() - ONE_YEAR)).toBe('1 year ago'))

    test('10 years ago', () => expect(format(Date.now() - (ONE_YEAR * 10))).toBe('10 years ago'))

    test('right now', () => {
        expect(format(Date.now() + 5000)).toBe('right now')
        expect(format(Date.now() + 5000, {relativeDate: Date.now()})).toBe('right now')
    })

    test('30 seconds from now', () =>
        expect(format(Date.now() + 30000)).toBe('30 seconds from now'))

    test('1 minute from now', () => expect(format(Date.now() + ONE_MINUTE)).toBe('1 minute from now'))

    test('10 minutes from now', () =>
        expect(format(Date.now() + (ONE_MINUTE * 10))).toBe('10 minutes from now'))

    test('1 hour from now', () => expect(format(Date.now() + ONE_HOUR)).toBe('1 hour from now'))

    test('10 hours from now', () => expect(format(Date.now() + (ONE_HOUR * 10))).toBe('10 hours from now'))

    test('1 day from now', () => expect(format(Date.now() + ONE_DAY)).toBe('1 day from now'))

    test('1 week from now', () => expect(format(Date.now() + ONE_WEEK)).toBe('1 week from now'))

    test('1 month from now', () => expect(format(Date.now() + ONE_MONTH)).toBe('1 month from now'))

    test('10 months from now', () =>
        expect(format(Date.now() + (ONE_MONTH * 10))).toBe('10 months from now'))

    test('1 year from now', () => expect(format(Date.now() + ONE_YEAR)).toBe('1 year from now'))

    test('10 years from now', () =>
        expect(format(Date.now() + (ONE_YEAR * 10))).toBe('10 years from now'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(
            format(currentTimestamp - (ONE_YEAR * 10), {lateDeadline: currentTimestamp})
        ).toBe(`${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('en-US')}`)
    })

    // test('today at 12:00:00 AM', () => {
    //     // we need to create a date
    //     // then another date as the relative date that is at least 6 hours apart
    //     // then we need to format the date
    //     // then we need to check if the date is formatted correctly
    //     const date = new Date()
    //     date.setHours(0, 0, 0, 0)
    //     const relativeDate = new Date(date.getTime() + 21(ONE_MINUTE * 10))
    //     expect(format(date, {relativeDate, closeDates: true})).toBe('Today at 12:00:00 AM')
    // })

    // test('tomorrow at 12:00:00 AM', () => {
    //     const date = new Date()
    //     date.setHours(0, 0, 0, 0)
    //     const relativeDate = new Date(date.getTime() - 21(ONE_MINUTE * 10))
    //     expect(format(date, {relativeDate, closeDates: true})).toBe('Tomorrow at 12:00:00 AM')
    // })

    // test('yesterday at 12:00:00 AM', () => {
    //     const date = new Date()
    //     date.setHours(0, 0, 0, 0)
    //     const relativeDate = new Date(date.getTime() + 21(ONE_MINUTE * 10))
    //     expect(format(date, {relativeDate, closeDates: true})).toBe('Today at 12:00:00 AM')
    // })


})

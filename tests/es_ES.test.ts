import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('es_ES', () => {
    test('justo ahora', () => {
        expect(format(Date.now(), {locale: 'es_ES'})).toBe('justo ahora')
        expect(format(Date.now(), {locale: 'es_ES', relativeDate: Date.now()})).toBe('justo ahora')

        expect(format(Date.now() - 5000, {locale: 'es_ES'})).toBe('justo ahora')
        expect(format(Date.now() - 5000, {locale: 'es_ES', relativeDate: new Date})).toBe('justo ahora')
    })

    test('hace 1 minuto', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'es_ES'})).toBe('hace 1 minuto'))

    test('hace 10 minutos', () =>
        expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'es_ES'})).toBe('hace 10 minutos'))

    test('hace 1 hora', () => expect(format(Date.now() - ONE_HOUR, {locale: 'es_ES'})).toBe('hace 1 hora'))

    test('hace 10 horas', () =>
        expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'es_ES'})).toBe('hace 10 horas'))

    test('hace 1 día', () => expect(format(Date.now() - ONE_DAY, {locale: 'es_ES'})).toBe('hace 1 día'))

    test('hace 1 semana', () =>
        expect(format(Date.now() - ONE_WEEK, {locale: 'es_ES'})).toBe('hace 1 semana'))

    test('hace 1 mes', () => expect(format(Date.now() - ONE_MONTH, {locale: 'es_ES'})).toBe('hace 1 mes'))

    test('hace 10 meses', () =>
        expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'es_ES'})).toBe('hace 10 meses'))

    test('hace 1 año', () => expect(format(Date.now() - ONE_YEAR, {locale: 'es_ES'})).toBe('hace 1 año'))

    test('hace 10 años', () =>
        expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'es_ES'})).toBe('hace 10 años'))

    test('ahora mismo', () => expect(format(Date.now() + 5000, {locale: 'es_ES'})).toBe('ahora mismo'))

    test('dentro de 30 segundos', () =>
        expect(format(Date.now() + 30000, {locale: 'es_ES'})).toBe('en 30 segundos'))

    test('en 1 minuto', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'es_ES'})).toBe('en 1 minuto'))

    test('en 10 minutos', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'es_ES'})).toBe('en 10 minutos'))

    test('en 1 hora', () => expect(format(Date.now() + ONE_HOUR, {locale: 'es_ES'})).toBe('en 1 hora'))

    test('en 10 horas', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'es_ES'})).toBe('en 10 horas'))

    test('en 1 día', () => expect(format(Date.now() + ONE_DAY, {locale: 'es_ES'})).toBe('en 1 día'))

    test('en 1 semana', () => expect(format(Date.now() + ONE_WEEK, {locale: 'es_ES'})).toBe('en 1 semana'))

    test('en 1 mes', () => expect(format(Date.now() + ONE_MONTH, {locale: 'es_ES'})).toBe('en 1 mes'))

    test('en 10 meses', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'es_ES'})).toBe('en 10 meses'))

    test('en 1 año', () => expect(format(Date.now() + ONE_YEAR, {locale: 'es_ES'})).toBe('en 1 año'))

    test('en 10 años', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'es_ES'})).toBe('en 10 años'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(format(currentTimestamp - (ONE_YEAR * 10), {locale: 'es_ES', lateDeadline: currentTimestamp})).toBe(
            `${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('es-ES')}`
        )
    })
})

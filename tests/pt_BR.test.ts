import { ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_MONTH, ONE_WEEK, ONE_YEAR, THIRTY_SECONDS } from '../src/constants'
import { format } from '../src/format'

describe('pt_BR', () => {
    test('agora mesmo', () => {
        expect(format(Date.now(), {locale: 'pt_BR'})).toBe('agora mesmo')
        expect(format(Date.now(), {locale: 'pt_BR', relativeDate: Date.now()})).toBe('agora mesmo')

        expect(format(Date.now() - 5000, {locale: 'pt_BR'})).toBe('agora mesmo')
        expect(format(Date.now() - 5000, {locale: 'pt_BR', relativeDate: new Date})).toBe('agora mesmo')
    })

    test('1 minuto atrás', () => expect(format(Date.now() - ONE_MINUTE, {locale: 'pt_BR'})).toBe('1 minuto atrás'))

    test('10 minutos atrás', () => expect(format(Date.now() - (ONE_MINUTE * 10), {locale: 'pt_BR'})).toBe('10 minutos atrás'))

    test('1 hora atrás', () => expect(format(Date.now() - ONE_HOUR, {locale: 'pt_BR'})).toBe('1 hora atrás'))

    test('10 horas atrás', () => expect(format(Date.now() - (ONE_HOUR * 10), {locale: 'pt_BR'})).toBe('10 horas atrás'))

    test('1 dia atrás', () => expect(format(Date.now() - ONE_DAY, {locale: 'pt_BR'})).toBe('1 dia atrás'))

    test('1 semana atrás', () => expect(format(Date.now() - ONE_WEEK, {locale: 'pt_BR'})).toBe('1 semana atrás'))

    test('1 mês atrás', () => expect(format(Date.now() - ONE_MONTH, {locale: 'pt_BR'})).toBe('1 mês atrás'))

    test('10 meses atrás', () => expect(format(Date.now() - (ONE_MONTH * 10), {locale: 'pt_BR'})).toBe('10 meses atrás'))

    test('1 ano atrás', () => expect(format(Date.now() - ONE_YEAR, {locale: 'pt_BR'})).toBe('1 ano atrás'))

    test('10 anos atrás', () => expect(format(Date.now() - (ONE_YEAR * 10), {locale: 'pt_BR'})).toBe('10 anos atrás'))

    test('agora', () => expect(format(Date.now() + 5000, {locale: 'pt_BR'})).toBe('agora'))

    test('em 30 segundos', () => expect(format(Date.now() + 30000, {locale: 'pt_BR'})).toBe('em 30 segundos'))

    test('em 1 minuto', () => expect(format(Date.now() + ONE_MINUTE, {locale: 'pt_BR'})).toBe('em 1 minuto'))

    test('em 10 minutos', () => expect(format(Date.now() + (ONE_MINUTE * 10), {locale: 'pt_BR'})).toBe('em 10 minutos'))

    test('em 1 hora', () => expect(format(Date.now() + ONE_HOUR, {locale: 'pt_BR'})).toBe('em 1 hora'))

    test('em 10 horas', () => expect(format(Date.now() + (ONE_HOUR * 10), {locale: 'pt_BR'})).toBe('em 10 horas'))

    test('em 1 dia', () => expect(format(Date.now() + ONE_DAY, {locale: 'pt_BR'})).toBe('em 1 dia'))

    test('em 1 semana', () => expect(format(Date.now() + ONE_WEEK, {locale: 'pt_BR'})).toBe('em 1 semana'))

    test('em 1 mês', () => expect(format(Date.now() + ONE_MONTH, {locale: 'pt_BR'})).toBe('em 1 mês'))

    test('em 10 meses', () => expect(format(Date.now() + (ONE_MONTH * 10), {locale: 'pt_BR'})).toBe('em 10 meses'))

    test('em 1 ano', () => expect(format(Date.now() + ONE_YEAR, {locale: 'pt_BR'})).toBe('em 1 ano'))

    test('em 10 anos', () => expect(format(Date.now() + (ONE_YEAR * 10), {locale: 'pt_BR'})).toBe('em 10 anos'))

    test('late deadline', () => {
        const currentTimestamp = Date.now()
        expect(
            format(currentTimestamp - (ONE_YEAR * 10), {locale: 'pt_BR', lateDeadline: currentTimestamp})
        ).toBe(`${new Date(currentTimestamp - (ONE_YEAR * 10)).toLocaleString('pt-BR')}`)
    })
})
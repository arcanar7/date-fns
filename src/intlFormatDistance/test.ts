/* eslint-env mocha */

import assert from 'assert'
import intlFormatDistance from '.'

describe('intlFormatDistance', () => {
  process.env.TZ = 'America/New_York'
  describe('default options', () => {
    it('prints out `now` for the same dates', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0)
      )
      assert(result === 'now')
    })

    it('prints out `1 second ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 1)
      )
      assert(result === '1 second ago')
    })

    it('prints out `in 1 second`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 1),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 second')
    })

    it('prints out `1 minute ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 31, 0)
      )
      assert(result === '1 minute ago')
    })

    it('prints out `in 1 minute`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 31, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 minute')
    })

    it('prints out `1 hour ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 11, 30, 0)
      )
      assert(result === '1 hour ago')
    })

    it('prints out `in 1 hour`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 11, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 1 hour')
    })

    it('prints out `tomorrow`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'tomorrow')
    })

    it('prints out `yesterday`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0)
      )
      assert(result === 'yesterday')
    })

    it('prints out `last month`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0)
      )
      assert(result === 'last month')
    })

    it('prints out `next month`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === 'next month')
    })

    it('prints out `last quarter`', () => {
      const result = intlFormatDistance(
        new Date(1986, 1, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0)
      )
      assert(result === 'last quarter')
    })

    it('prints out `in next quarter`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 1, 4, 10, 30, 0)
      )
      assert(result === 'next quarter')
    })

    it('prints out `in next quarter`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 29, 10, 30, 0),
        new Date(1986, 1, 4, 10, 30, 0)
      )
      assert(result === 'next quarter')
    })

    it('prints out `2 quarters ago`', () => {
      const result = intlFormatDistance(
        new Date(1985, 10, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === '2 quarters ago')
    })

    it('prints out `in 2 quarters`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1985, 10, 4, 10, 30, 0)
      )
      assert(result === 'in 2 quarters')
    })

    it('prints out `next year`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'next year')
    })

    it('prints out `next year`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 11, 10, 30, 0)
      )
      assert(result === 'next year')
    })

    it('prints out `last year`', () => {
      const result = intlFormatDistance(
        new Date(1985, 1, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0)
      )
      assert(result === 'last year')
    })

    it('prints out `in 2 years`', () => {
      const result = intlFormatDistance(
        new Date(1988, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0)
      )
      assert(result === 'in 2 years')
    })
  }) // End of default options

  describe('with options', () => {
    it('prints out `today`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 11, 30, 0),
        new Date(1987, 3, 4, 10, 30, 0),
        { unit: 'day' }
      )
      assert(result === 'today')
    })

    it('prints out `next month`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 4, 29, 10, 30, 0),
        { unit: 'month' }
      )
      assert(result === 'next month')
    })

    it('prints out `in 4 quarters`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'quarter' }
      )
      assert(result === 'in 4 quarters')
    })

    it('prints out `in 12 months`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'month' }
      )
      assert(result === 'in 12 months')
    })

    it('prints out `in 52 weeks`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'week' }
      )
      assert(result === 'in 52 weeks')
    })

    it('prints out `in 365 days`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'day' }
      )
      assert(result === 'in 365 days')
    })

    it('prints out in `8,760 hours`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'hour' }
      )
      assert(result === 'in 8,760 hours')
    })

    it('prints out in `525,600 minutes`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'minute' }
      )
      assert(result === 'in 525,600 minutes')
    })

    it('prints out in `31,536,000 seconds`', () => {
      const result = intlFormatDistance(
        new Date(1987, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'second' }
      )
      assert(result === 'in 31,536,000 seconds')
    })

    it('prints out `in 1 day`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === 'in 1 day')
    })

    it('prints out `1 month ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === '1 month ago')
    })

    it('prints out `in 1 month`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === 'in 1 month')
    })

    it('prints out `last month`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 29, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0),
        { unit: 'month' }
      )
      assert(result === 'last month')
    })

    it('prints out `1 quarter ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 1, 4, 10, 30, 0),
        new Date(1986, 5, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === '1 quarter ago')
    })

    it('prints out `in 1 quarter`', () => {
      const result = intlFormatDistance(
        new Date(1986, 5, 4, 10, 30, 0),
        new Date(1986, 1, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === 'in 1 quarter')
    })

    it('prints out `1 year ago`', () => {
      const result = intlFormatDistance(
        new Date(1985, 1, 4, 10, 30, 0),
        new Date(1986, 4, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === '1 year ago')
    })

    it('prints out `in 1 year`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1985, 4, 4, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === 'in 1 year')
    })

    it('prints out `el próximo año`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 4, 10, 30, 0),
        new Date(1985, 4, 4, 10, 30, 0),
        { locale: 'es' }
      )
      assert(result === 'el próximo año')
    })

    // falls back to { numeric: always }
    it('prints `tomorrow`', () => {
      const result = intlFormatDistance(
        new Date(1985, 4, 5, 10, 30, 0),
        new Date(1985, 4, 4, 10, 30, 0),
        { style: 'short', numeric: 'auto' }
      )
      assert(result === 'tomorrow')
    })

    it('prints `next mo`', () => {
      const result = intlFormatDistance(
        new Date(1985, 5, 4, 10, 30, 0),
        new Date(1985, 4, 4, 10, 30, 0),
        { style: 'short', numeric: 'auto' }
      )
      assert(result === 'next mo')
    })

    it('prints `next yr.`', () => {
      const result = intlFormatDistance(
        new Date(1986, 4, 5, 10, 30, 0),
        new Date(1985, 4, 5, 10, 30, 0),
        { style: 'short', numeric: 'auto' }
      )
      assert(result === 'next yr')
    })

    it('prints out `in 0 seconds`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { numeric: 'always' }
      )
      assert(result === 'in 0 seconds')
    })

    it('prints `in 60 minutes`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 11, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { unit: 'minute' }
      )
      assert(result === 'in 60 minutes')
    })

    it('prints out `jetzt`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { locale: 'de-DE', localeMatcher: 'lookup' }
      )
      assert(result === 'jetzt')
    })

    it('prints out in `jetzt`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { locale: 'de-DE', localeMatcher: 'best fit' }
      )
      assert(result === 'jetzt')
    })

    it('prints out `in 0 Sekunden`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { locale: 'de-DE', numeric: 'always' }
      )
      assert(result === 'in 0 Sekunden')
    })

    it('prints out `jetzt`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { locale: 'de-DE', numeric: 'auto' }
      )
      assert(result === 'jetzt')
    })

    it('prints out `now`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 10, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { numeric: 'auto' }
      )
      assert(result === 'now')
    })

    it('prints `dentro de 60 minutos`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 11, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { unit: 'minute', locale: 'es' }
      )
      assert(result === 'dentro de 60 minutos')
    })

    it('prints `in 60 Minuten`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 5, 11, 30, 0),
        new Date(1986, 3, 5, 10, 30, 0),
        { unit: 'minute', locale: 'de' }
      )
      assert(result === 'in 60 Minuten')
    })

    it('prints out `1 hour ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 11, 30, 0),
        { unit: 'hour' }
      )
      assert(result === '1 hour ago')
    })

    it('prints out `60 minutes ago`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 10, 30, 0),
        new Date(1986, 3, 4, 11, 30, 0),
        { unit: 'minute' }
      )
      assert(result === '60 minutes ago')
    })

    it('prints out `in 60 minutes`', () => {
      const result = intlFormatDistance(
        new Date(1986, 3, 4, 11, 30, 0),
        new Date(1986, 3, 4, 10, 30, 0),
        { unit: 'minute' }
      )
      assert(result === 'in 60 minutes')
    })
  })

  describe('edge cases', () => {
    it('throws Range Error if the date isnt valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(NaN),
          new Date(1986, 3, 4, 10, 30, 0)
        ),
        RangeError
      )
    })

    it('throws Range Error if the base date isnt valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it("throws Range Error if both dates aren't valid", () => {
      assert.throws(
        intlFormatDistance.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it('throws Range Error if unit is not valid', () => {
      assert.throws(
        // @ts-ignore: the value doesnt match one of the Unit values from '../types.ts'
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { unit: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if locale is not valid', () => {
      assert.throws(
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { locale: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if localeMatcher is not valid', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { localeMatcher: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if numeric is not valid', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { numeric: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('throws Range Error if style is not valid', () => {
      assert.throws(
        // @ts-expect-error
        intlFormatDistance.bind(
          null,
          new Date(1986, 3, 4, 10, 30, 0),
          new Date(1986, 3, 4, 10, 30, 0),
          { style: 'wrongValue' }
        ),
        RangeError
      )
    })

    it('handles dates before 100 AD and prints out `in 60 minutes`', () => {
      const result = intlFormatDistance(
        new Date(1, 3, 4, 11, 30, 0),
        new Date(1, 3, 4, 10, 30, 0),
        { unit: 'minute' }
      )
      assert(result === 'in 60 minutes')
    })
  })
})

// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addMilliseconds from '.'

describe('addMilliseconds', function() {
  it('adds the given number of milliseconds', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('accepts a timestamp', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(),
      500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500))
  })

  it('converts a fractional number to an integer', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      750.75
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750))
  })

  it('implicitly converts number arguments', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 5),
      // $ExpectedMistake
      '750'
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 755))
  })

  it('does not mutate the original date', function() {
    const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    addMilliseconds(date, 250)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addMilliseconds(new Date(NaN), 750)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addMilliseconds.bind(null), TypeError)
    assert.throws(addMilliseconds.bind(null, 1), TypeError)
  })
})
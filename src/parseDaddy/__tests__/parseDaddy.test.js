import parseDaddy from '..'

describe('parseDaddy util', () => {
  it('parses a valid object', () => {
    const jsonString = '{"name": "John", "age": 30}'
    const result = parseDaddy(jsonString)
    
    expect(result).toEqual({
      name: 'John',
      age: 30,
    })
  })

  it('parses a valid array', () => {
    expect(parseDaddy('[1, 2, 3]')).toEqual([1, 2, 3])
    expect(parseDaddy('[]')).toEqual([])
  })

  it('returns an empty object when attempting an invalid object', () => {
    expect(parseDaddy('{"name": "John", "age":}')).toEqual({})
    expect(parseDaddy("{ key: 'value' }")).toEqual({})

    const invalidNestedJson = '{"name": "John", "details": { "age": 30, }}'
    expect(parseDaddy(invalidNestedJson)).toEqual({})
  })

  it('returns an empty array when attempting an invalid array', () => {
    expect(parseDaddy('[1, 2, 3')).toEqual([])
    expect(parseDaddy('[1, 2, { "key": "value" },]')).toEqual([])
  })

  it('returns an empty object when valid primitive would not be an object or array', () => {
    expect(parseDaddy(true)).toStrictEqual({})
    expect(parseDaddy(false)).toStrictEqual({})
    expect(parseDaddy(42)).toStrictEqual({})
  })

  it('returns an empty object when a value does not parse', () => {
    expect(parseDaddy('')).toStrictEqual({})
    expect(parseDaddy(null)).toStrictEqual({})
    expect(parseDaddy(undefined)).toStrictEqual({})
    expect(parseDaddy(function() {})).toStrictEqual({})
    expect(parseDaddy(() => {})).toStrictEqual({})
    expect(parseDaddy(1234567890123456789012345678901234567890n)).toStrictEqual({})
    expect(parseDaddy(Symbol('symbol'))).toStrictEqual({})
    expect(parseDaddy(NaN)).toStrictEqual({})
  })})

let falsyInt = 0
let falsyBool = false
let falsyNull = null
let falsyUndefined = undefined

falsyInt ??= 'foo'
falsyBool ??= 'bar'
falsyNull ??= 'baz'
falsyUndefined ??= 'fizz'

console.log(falsyInt, falsyBool, falsyNull, falsyUndefined);
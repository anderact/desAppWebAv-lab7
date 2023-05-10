const {palindrome} = require ('../utils/for_testing')

test('palindrome of midudev', () => {
    const result = palindrome('midudev')

    expect(result).toBe('vedudim')
});

test('palindorme of empty string', () => {
    //const result = palindrome()
    const result = palindrome('')

    expect(result).toBe('')
})

test('palindrome of undefined', () => {
   const result = palindrome()

   expect(result).toBeUndefined()
})

//new tests

test('palindrome of string with blank spaces', () => {
    const result = palindrome("hola mundo")

    expect(result).toBe('odnum aloh')
})

test('palindrome with non-string parameter', () => {
    const result = palindrome(123)

    expect(result).toBe("")
})
const palindrome = (string) => {

   if(typeof string == 'undefined')  return

   if(typeof string != "string") return ""

   return string
     .split('')
     .reverse()
     .join('')
}

const average = array => {
    let sum = 0;
    array.forEach(num => { sum += num });
    return sum / array.length;
}

const suma = (a, b) => {
    if (typeof a != "number" || typeof b != "number") return "valores incorrectos!"

    return a + b;
}

module.exports = {
    palindrome,
    average,
    suma
}
// let = polindrome('racecar') //true
// let = polindrome('table') // false
// let = polindrome('Анна') //true
// let = polindrome('А роза упала на лапу Азора') //true

const polindrome = (word) => {
 word = word.toLowerCase().replace(/\s/g,'')

 return word === word.split('').reverse().join('')

}


console.log(polindrome('А роза упала на лапу Азора'))
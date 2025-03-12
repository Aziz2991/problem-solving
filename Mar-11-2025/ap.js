// Make the first letter capital of every word of string
// let str = 'pakistan is my home';
// let capitalizedStr = str.split(' ').map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// ).join(' ')
// console.log(capitalizedStr)

// We can make every words first letter capital by using loop also
// let name = 'what is your name'
// let n = name.split(' ')
// console.log(n)

// let str = 'pakistan is my home';
// let words = str.split(' ');
// console.log(words)
// for(let i = 0; i < words.length; i ++){words[i] = words[i][0].
//     toUpperCase() + words[i].slice(1).toLowerCase()
// }
// let capitalizedStr = words.join(' ');
// console.log(capitalizedStr)
// console.log(words)



// Create Factorial of any number
let num = prompt('Enter word');
let Factorial = 1;
for(let i = num; i > 0 ; i --){Factorial *= i;}
console.log(Factorial)
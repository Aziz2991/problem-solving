// make capitalize every word of a paragraph
// let para = 'i love pakistani people as i am also pakistani';
// let split = para.split(' ')
// console.log(split)
// for(var i = 0; i < split.length; i++){
//     console.log(split[i][0].toUpperCase() + split[i].slice(1))
//     split[i]= (split[i][0].toUpperCase() + split[i].slice(1))

// }
// var final = split.join(' ')
// document.writeln(final)
// let para = 'i love pakistan';
// let test = para.split(' ')
// console.log(test)
// for(var i = 0 ; i < test.length; i++){
//     let a = (test[i])
//     test[i] = (a.slice(0,1).toUpperCase() + a.slice(1))
// }
// var final = test.join(' ')
// console.log(final)

// Generate Password
// var str ='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+'
// var pass = ''
//  var len = 8;
//  for(var i = 0; i < len; i++){
//     pass += str[Math.floor(Math.random() * str.length)]
//  }
//  document.writeln(pass)
var str ='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+'
// var pass = ''
//  var len = 8;
//  for(var i = 0; i < len; i++){
//     pass +=(str[Math.floor((Math.random() * str.length))])
//  }
//  document.writeln(pass)
// function generatePassword(length = 12){
//     const charset ='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+'
//     let password = '';
//     for( let i = 0; i<length; i++){
//         const randomIndex = Math.floor(Math.random() * charset.length)
//         password += charset[randomIndex]
//     }
//     return password;}
//     console.log(generatePassword())
//     console.log(generatePassword(4))
//   let password ='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+'
let pass = '';
let leng = 8;
for(var i = 0; i < leng; i++) 
    { pass += password[Math.floor(Math.random()*password.length)]

















    }
console.log(pass)
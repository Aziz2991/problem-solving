let password ='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_=+'
let pass = ''
let length = 6;
for(var i = 0; i < length; i++)
{let a = password[(Math.floor(Math.random() * password.length))]
    pass += password[(Math.floor(Math.random() * password.length))]
    
}
console.log(pass)
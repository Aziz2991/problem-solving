// Make cpital every word of a long paragraph that is given in  string

let para = 'i love animals because animals are faithful';
let newpara = para.split(' ')
console.log(newpara)
for(let i = 0; i < newpara.length; i++){
    newpara[i] = newpara[i].slice(0,1).toUpperCase() + newpara[i].slice(1)
    
}

let final = newpara.join(' ')
console.log(final)
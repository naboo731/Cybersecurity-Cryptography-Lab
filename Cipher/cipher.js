

const cipher = (phrase) => {
let decipher = 4
let solution = ""
for (let i = 0; i < phrase.length; i++){
    let cipheredPhrase = phrase[i].charCodeAt() + decipher
    solution += String.fromCharCode(cipheredPhrase)
}
    return solution
}

console.log(cipher("I love cryptography!"))

const decipher = (phrase) => {
    let key = 4
    let solution = ""
for (let i = 0; i < phrase.length; i++){
    let cipheredPhrase = phrase[i].charCodeAt() - key
    solution += String.fromCharCode(cipheredPhrase)
}
    return solution
}

console.log(decipher(cipher("I love cryptography!")))


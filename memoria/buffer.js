let buffer =Buffer.alloc(1);


console.log(buffer);

let abc = Buffer.alloc(26)


for (let i=0; i<26; i++){
    abc[i]=i+97;
}

console.log(abc)
console.log(abc.toString())
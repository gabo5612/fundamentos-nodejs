const bcrypt= require('bcrypt');

const pass = '1234segura!';

bcrypt.hash(pass, 1, function(err, hash){
    console.log(hash)
    bcrypt.compare(hash, pass, function(err, res){
        console.log(err)
        console.log(res);
    })
})

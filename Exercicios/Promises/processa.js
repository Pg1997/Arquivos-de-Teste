const fs = require('fs');

//Promisse
const promisse = file => new Promise((resolve, reject) => {    
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        }else{
            resolve(contents)
        }        
    });
});
    
promisse('./arq1.txt')
.then( contents => {
    console.log(String(contents));
    return promisse('./arq2.txt');
}).then( contents => {
    console.log(String(contents));
}).catch( err => {
    console.log(String(err))
});



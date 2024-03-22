const fs = require('fs');

fs.createReadStream('./certs/DGAC.pem').pipe(
    fs.createWriteStream('./.next/DGAC.pem')
);
// const cert = fs.readFile('./certs/DGAC.pem', (data) => {
//     fs.writeFile()
// })

const fs = require('fs');

fs.createReadStream('./certs/DGAC.pem').pipe(
    fs.createWriteStream('/vercel/output/DGAC.pem')
);
// const cert = fs.readFile('./certs/DGAC.pem', (data) => {
//     fs.writeFile()
// })

// Recursive function to get files
function getFiles(dir, files = []) {
    // Get an array of all files and directories in the passed directory using fs.readdirSync
    const fileList = fs.readdirSync(dir);
    // Create the full path of the file/directory by concatenating the passed directory and file/directory name
    for (const file of fileList) {
        const name = `${dir}/${file}`;
        // Check if the current file/directory is a directory using fs.statSync
        if (fs.statSync(name).isDirectory()) {
            // If it is a directory, recursively call the getFiles function with the directory path and the files array
            getFiles(name, files);
        } else {
            // If it is a file, push the full path to the files array
            // files.push(name);
            console.log(name);
        }
    }
    return files;
}

const filesInTheFolder = getFiles('/vercel');

//ctrl+`--->opens terminal
//npm init -y ---> no questions asked
//npm init --->ask you the name of your package
//we created package.json using npm init which consist information about the project
/*
how to use any of the modules present in node.js(https://nodejs.org/docs/latest/api/)
1.click on the desired module
2.again click on it from the table of content
3.use the cgs version of the code you want to copy and click on copy
*/
const fs = require('node:fs'); //fs module has been taken out from node and moved into our fs constant
//const  fs = require('fs'); //both are same

//file system

//1.writefile
//fs.writeFile(file name withing quotes, data[, options], callback(err))
fs.writeFile('file.txt', 'Hello world', function (err) {
  if (err) {
    console.log('error');
  } else console.log('done writing');
}); //this code is to be executed by node. So in the terminal, we need to write----> node script.js

//2.appendfile
//to add more data into an already created file
//fs.appendFile(path, data[, options], callback)
fs.appendFile('file.txt', '\nI just learned how to append', function (err) {
  if (err) {
    console.log('error');
  } else console.log('done appending');
});

//3.rename
//fs.rename(oldPath, newPath, callback)
fs.rename('file.txt', 'newname.txt', function (err) {
  if (err) {
    console.log(err.message);
  } else console.log('done renaming');
});
//4.copyfile
//fs.copyFile(src, dest[, mode], callback)
fs.copyFile('newname.txt', './copied.txt', function (err) {
  if (err) {
    console.log(err.message);
  } else console.log('done copying');
});

//5.unlink
//fs.unlink(path, callback)
fs.unlink('./file.txt', function (err) {
  if (err) {
    console.log(err.message);
  } else console.log('done deleting');
});

//6.rmdir--->removes directory
//fs.rmdir(path[, options], callback)
//can remove an empty directory
//to remove a non empty directory
/*
fs.rmdir("./second",{recursive:true}, function(err){
if(err) console.error(err);
else console.log("remove");
})
*/
//we can also use fs.rm instead of fs.rmdir

//http module
//protocol--->rules
//every os has preinstalled networking related rules
//http protocol is a set of rules that is used to communicate between client and server

const http = require('http'); //package for using http protocol which is installed in node

const server = http.createServer(function (req, res) {
  res.end('hello world');
}); //to create server and saved in server constant

server.listen(3000); //go to any browser after running this and search 'localhost:3000'

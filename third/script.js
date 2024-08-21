//npm understading

//npm-node package manager(node.js related packages--->earlier)
//later--->not only node related packages are available but also react, angular, etc packages are available
//module--->installed in node.js cre
//package--->downloaded from npm

//installing and uninstalling anything basics & advanced

//to install any package from npm---> npm install package_name or npm i package_name
//whenever we install something, that becomes a dependency
//to uninstall any package from npm---> npm uninstall package_name or npm un package_name
//to install a certain version of a package---> npm i package_name@Version
//node module folders helps us to view the packages that we have instlled and the other packages that got installed because the package that we need depends on them.

//dependencies--->packages annd dependencies of packages

//devdependencies--->packages useful only for development, but when our app is deployed,they are not used anymore.
//example--->npm i nodemon --save-dev

//scripts-understanding default scripts PATH and custom scripts
//open package.json by typing "npm init" in terminal
//go to scripts and you might create a new command ("Megha" here)
//in terminal--->npm Megha
/*
result--->Unknown command: "Megha"

Did you mean this?
npm run Megha # run the "Megha" package script

To see a list of supported npm commands, run:
npm help
*/
//in terminal--->npm run Megha

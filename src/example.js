const {VM,VMScript} = require('vm2');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'scripts', 'debug.js');
const script = new VMScript(fs.readFileSync(filePath, 'utf8'),{filename: filePath});
const vm = new VM({
    sandbox:{
        process:process
    }
});
console.log(vm.run(script)); // TypeErr
debugger

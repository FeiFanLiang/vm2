const {VM,VMScript} = require('vm2');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'work', 'work.js');

const location = fs.readFileSync(path.join(__dirname, 'scripts', 'bom', 'location.js'), 'utf-8');
const navigator = fs.readFileSync(path.join(__dirname, 'scripts', 'bom', 'navigator.js'), 'utf-8');
const windowScript = fs.readFileSync(path.join(__dirname, 'scripts', 'bom', 'window.js'), 'utf-8');
const eventTarget = fs.readFileSync(path.join(__dirname, 'scripts', 'common', 'eventTarget.js'), 'utf-8');
const dom = fs.readFileSync(path.join(__dirname, 'scripts', 'dom', 'dom.js'), 'utf-8');
const document = fs.readFileSync(path.join(__dirname, 'scripts', 'bom', 'document.js'), 'utf-8');
const work = fs.readFileSync(filePath, 'utf-8');
const vm = new VM({
    sandbox:{
        h_log:console.log
    }
});

const beforeScript = `${eventTarget}\n${navigator}\n${location}\n${dom}\n${document}\n${windowScript}`



const runScript = `debugger;\ntry{${beforeScript}\n${work}}catch(e){console.log(e);debugger}`
console.log(vm.run(runScript,{
    filename:'https://www.python-spider.com/challenge/new/jss?nm=23'
})); 


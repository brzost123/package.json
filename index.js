var OSinfo = require('C:/Users/Dyrektor/Desktop/Arek-programowanie/Private/Arek/js/na-kod/modules/OSinfo');
console.log(OSinfo)
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        //exit
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!/n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!/n');
                break;
            case '/getOSinfo':            
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!/n');
            }
        }
});

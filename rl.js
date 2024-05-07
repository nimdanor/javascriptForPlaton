const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// Ask for the user's name
rl.question("What's your name? ", function(name) {
 console.log(`Hello, ${name}!`);
 rl.close();
});

// Handle the close event
rl.on('close', function() {
 console.log('Exiting...');
 process.exit(0);
});


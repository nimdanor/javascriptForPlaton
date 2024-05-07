


process.argv.forEach(function (val, index, array) {
    console.log("argv[",index,"] == " + val);
});

process.stdin.on('readable', () => {
    let chunk = ""; 
    console.log("readable informaitons on stdin");
    // Use a loop to make sure we read all available data. 
    while ((chunk = process.stdin.read()) !== null) { 
            chunk.toString().trim().split(' ').forEach(element => {
            console.log(element);
            } )
    }   
});

process.stdin.on('end', () => {
    console.log("end of stdin");
});



// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["12"],""],


["plusieurs arguments" ,["33","jkj","kk"],""],

["Test3" ,["3945"],"Une entrée standard avec du text \n sur plisuerus lignes\n"],["Test4" ,["1418"],""]]
PL:== */
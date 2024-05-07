



// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Ajout dans un tableau


// PL:code_before==





// PL:==

/* PL:statement==
Écrire une fonction **concatenation(AA,BB)** qui retourne le tableau **AA** auquel on concatenne le tableau **BB** à la fin.
PL:== */ 

// PL:solution==

function concatenation(a,b) { 
        return a.concat(b);
}


// PL:== 

// PL:code_after==

a = [];
b = [];
process.argv.forEach((val, index) => {
    if(index>1)
            a.push(val);
  });

process.stdin.on('readable', () => {
        let chunk = ""; 
        // Use a loop to make sure we read all available data. 
        while ((chunk = process.stdin.read()) !== null) { 
                chunk.toString().trim().split(' ').forEach(element => {
                b.push(element);
                } )
        }   
        
});

process.stdin.on('end', () => {
        console.log( concatenation(a,b));
});



// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["1","2","3"],"4 5 6"]]
PL:== */






// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Ajout dans un tableau


// PL:code_before==





// PL:==

/* PL:statement==
Écrire une fonction **trouve(AA,val)** qui retourne si le tableau **AA** contien la valeur **BB**.
PL:== */ 

// PL:solution==

function trouve(a,b) { 
      
    return a.includes(b);
}


// PL:== 

// PL:code_after==
a = [];
process.argv.forEach((val, index) => {
    a.push(parseInt(val));
  });

process.stdin.on("data", data => {
    console.log(trouve(a,parseInt(data)));
})

// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["1","2","3"],"1"], ["Test2" ,["1","2","3"],"6"]]
PL:== */


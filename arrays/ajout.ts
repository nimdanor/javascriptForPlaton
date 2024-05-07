



// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Ajout dans un tableau


// PL:code_before==





// PL:==

/* PL:statement==
Écrire une fonction **ajout(a,b)** qui retourne le tableau **a** auquel on a ajouter la valeur **b** à la fin.
PL:== */ 

// PL:solution==

function ajout(a:Array<any>,b:any):Array<any> { 
    a.push(b);
    return a;
}


// PL:== 

// PL:code_after==

var stdins: string  = "";

process.stdin.on('readable', () => {

    let chunk = ""; 

    console.log("readable informaitons on stdin");
    // Use a loop to make sure we read all available data. 
    while ((chunk = process.stdin.read()) !== null) { 
        stdins += chunk;
    }   
});

process.stdin.on('end', () => {
    let monArray: Array<any> = [];

    process.argv.forEach(function (val, index, array) {
    monArray.push(val);
    });

    console.log(ajout(monArray,stdins))
});




// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["12"],""], ["Test2" ,["33"],""],["Test3" ,["3945"],""],["Test4" ,["1418"],""]]
PL:== */


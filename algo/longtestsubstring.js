



// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Nom de l'exercice


// PL:code_before==

// PL:==

/* PL:statement==
Écrire une fonction `number somme_chiffres(n:number)` qui retourne la somme des chiffres de `n`.
PL:== */ 

// PL:solution==
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    m = 0;
    let a = new Set();
    for(x in s)
    {
        l=s[x];
        if (a.has(l)){ 
            if ( a.size>= m) m = a.size;
            a = new Set();
        }
        else a.add(l);
    }
    if ( a.size>= m) m = a.size;
    return m;
};
// PL:== 

// PL:code_after==

process.argv.forEach((val, index) => {
    if(index>1)
        console.log(val, lengthOfLongestSubstring(val));
  });

//console.log(lengthOfLongestSubstring("abcabcbdbxywtz")); // 3


// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["abcabcbdbxywtz"],""], ["Test2" ,["bbbbbbbb"],""],["Test3" ,["3945"],""],["Test4" ,["ababcabcdabcaba"],""]]
PL:== */


// Use this in case you want a multi exercice question 
// with statement and solution define in the beforesplit part





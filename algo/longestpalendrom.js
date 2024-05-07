



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
 * @return {string}
 */

var isPalindrom = function(s,k,n){ 
    for(let i=0; i <n/2; i++)
    { 
        if(s[i+k] != s[k+n-i]) return false;
    }
        return true;
} 

var longestPalindrome = function(s) {
    m=0;
    pos=0;

    for(i=0;i<s.length-1; i++)
        for(j=i;j<s.length;j++)
            {
                
            if (j-i>m && isPalindrom(s,i,j-i))
                {
                m= j-i;
                pos = i;
                }
            }
    return s.slice(pos,pos+m+1);

};
// PL:== 

// PL:code_after==

// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["babada"],""], ["Test2" ,["laval"],""],["Test3" ,["azertutazje"],""],["Test4" ,["pas de palindromes dans ce texte ou bien un tres petit qui ne se voit pas tout de suite"],""]]
PL:== */







// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Nom de l'exercice


// PL:code_before==

// PL:==

/* PL:statement==
Écrire une fonction **createCounter** qui prend un parametre un entier n et retourne une fonction qui retourne le nombre d'appel de cette fonction plus n.

Exemples:

    let compteur= createCounter(12);
    compteur(); // 12
    compteur(); // 13
    compteur(); // 14
    [compteur(),compteur(),compteur()] // [15,16,17
    compteur= createCounter(-2);
    [compteur(),compteur(),compteur()] // [-2,-1,0]

PL:== */ 

// PL:solution==
var x;
var createCounter = function(n) {
    x=n;
    return function() {
        
        x += 1 ;
        return x-1;        
    };
};

// PL:== 

// PL:code_after==

let f = createCounter(parseInt(process.argv[2]));
    
let a= [];
for(let i = 0; i < parseInt(process.argv[3]); i++) {
            a.push(f());
}
console.log(a);




// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["12","2"],""],
 ["Test2 " ,["-3","12"],""]
]
PL:== */


// Use this in case you want a multi exercice question 
// with statement and solution define in the beforesplit part
/* PL:beforesplit==
import random
VERSION=random.randint(1,4)
cflags=[f"-DFUNCNUM={VERSION}"]
QUESTIONS=["Pas de question","Écrire la fonction **int hauteur(Arbre a)**.",
"Écrire la fonction **int nb_feuilles(Arbre a)** qui compte le nombre de noeuds qui sont des feuilles.",
"Écrire la fonction **int nb_fils_unique(Arbre a)** qui compte le nombre de noeuds qui sont des noeuds interne à un seul fils.",
"Écrire la fonction **int est_strictement_binaire(Arbre a)** qui vérifie que tout les noeuds on un nombre pair de fils."
]

solution = globals()["sol"+str(VERSION)]

statement="""
On considère la structure récursive suivante :

        typedef struct noeud {
        int valeur;
        struct noeud * fg, * fd;
        } Noeud, * Arbre;

vous devez seulement : \n
"""
statement += QUESTIONS[VERSION]

PL:== */
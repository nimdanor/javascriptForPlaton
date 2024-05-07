


// The following variable is 1 if typescript is used and 0 if javascript is used
// PL:OPTION=0

// PL:title= Nom de l'exercice


// PL:code_before==

// PL:==

/* PL:statement==
Écrire une fonction `number somme_chiffres(n:number)` qui retourne la somme des chiffres de `n`.
PL:== */ 

// PL:solution==
// PL:== 

// PL:code_after==

// PL:==


// the following is a list of python 'tests'=[name, [args], stdinput]
/* PL:checks_args_stdin==
[["Test1" ,["12"],""], ["Test2" ,["33"],""],["Test3" ,["3945"],""],["Test4" ,["1418"],""]]
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
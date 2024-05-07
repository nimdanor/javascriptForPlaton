

Implémentez la fonction myAtoi(string s), qui convertit une chaîne en un entier signé 32 bits.

L'algorithme pour myAtoi(string s) est le suivant :

     Espaces : ignorez tout espace de début (" ").
     Signature : déterminez le signe en vérifiant si le caractère suivant est « - » ou « + », en supposant que la positivité n'est ni l'un ni l'autre.
     Conversion : lit l'entier en sautant les zéros non significatifs jusqu'à ce qu'un caractère autre qu'un chiffre soit rencontré ou que la fin de la chaîne soit atteinte. Si aucun chiffre n’a été lu, alors le résultat est 0.$[, ]$
     Arrondi : si l'entier est en dehors de la plage d'entiers signés 32 bits $[-2^{31}, 2^{31} - 1]$, arrondissez l'entier pour rester dans la plage. Plus précisément, les entiers inférieurs à $-2^{31}$ doivent être arrondis à $-2^{31}$ et les entiers supérieurs à $2^{31} - 1$ doivent être arrondis à $2^{31} - 1$.

Renvoie l'entier comme résultat final.

// -000042  => -42
// 00000-42 => 0
// 42       => 42
// -42      => -42  
// 42-      => 42

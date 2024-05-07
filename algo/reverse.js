

// Étant donné un entier signé de 32 bits x,
// renvoie x avec ses chiffres inversés.
// Si l'inversion de x fait sortir la valeur de la plage d'entiers 
// signés de 32 bits $[-2^{31}, 2^{31} - 1]$, renvoie 0.


/**
 * @param {number} x
 * @return {number}
 */


var f = function(p,x){
    console.log(x,x%10)
if (x>9) 
    return f(p*10+x%10,Math.trunc(x/10))
else
    return  p*10+x%10;
}

var reverse = function(x) {
if (x<0) return -1 * reverse(-x);
else {
return f(0,x);
}
};
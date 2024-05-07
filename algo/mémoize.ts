
/*
Étant donné une fonction fn, renvoie une version mémorisée de cette fonction.

Une fonction mémorisée est une fonction qui ne sera jamais appelée deux fois avec les mêmes entrées. Au lieu de cela, il renverra une valeur mise en cache.

Vous pouvez supposer qu'il existe 3 fonctions d'entrée possibles : somme, fib et factorielle.

     sum accepte deux entiers a et b et renvoie a + b. Supposons que si une valeur a déjà été mise en cache pour les arguments (b, a) où a != b, elle ne peut pas être utilisée pour les arguments (a, b). Par exemple, si les arguments sont (3, 2) et (2, 3), deux appels distincts doivent être effectués.
     fib accepte un seul entier n et renvoie 1 si n <= 1 ou fib(n - 1) + fib(n - 2) sinon.
     factorial accepte un seul entier n et renvoie 1 si n <= 1 ou factorial(n - 1) * n sinon.
*/
  


type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    
    return function(...args) {
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
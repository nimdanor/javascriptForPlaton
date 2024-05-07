
// OPTION=1

// Étant donné une fonction fn, renvoie une nouvelle fonction identique à la fonction d'origine sauf qu'elle garantit que fn est appelée au plus une fois.

//     La première fois que la fonction renvoyée est appelée, elle doit renvoyer le même résultat que fn.
//     Chaque fois qu'il est appelé ultérieurement, il doit renvoyer undéfini.

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
    
    return function (...args) {
        
    };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
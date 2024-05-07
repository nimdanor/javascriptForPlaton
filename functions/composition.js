// Typescript 
// PL:OPTION=1
function compose(functions) {
    return function (x) {
        for (var i = functions.length - 1; i >= 0; i -= 1)
            x = functions[i](x);
        return x;
    };
}
;
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 * Attention de droite a gauche
 */ 

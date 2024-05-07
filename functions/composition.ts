
// Typescript 
// PL:OPTION=1

type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        for(let i=functions.length-1;i>=0;i-=1)
             x=functions[i](x);
     return x;   
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 * Attention de droite a gauche 
 */
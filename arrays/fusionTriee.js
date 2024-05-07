

// javascript liste dans des tableaux 
// deux listes trée fusionnée en une liste triée 
// verifier que la complexité est linéaire 

array= [];
a =performance.now();

for(i=0;i<4000;i++)
    array.push(i);

    array.sort((a,b)=>a-b);
b = performance.now();

console.log((b-a));
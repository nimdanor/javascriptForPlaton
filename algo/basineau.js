

Vous recevez un tableau de n hauteurs entières. 
Il y a n lignes verticales tracées de telle sorte que les deux extrémités
 de la ième ligne soient (i, 0) et (i, height[i]).

Trouvez deux lignes qui, avec l'axe des x, forment un récipient, de telle sorte que le récipient contienne le plus d'eau.

Renvoie la quantité maximale d’eau qu’un récipient peut stocker.

Notez que vous ne pouvez pas incliner le conteneur.

/**
 * @param {number[]} height
 * @return {number}
 */

var min = function(a,b)
{
    if (a<b) return a; else return b;
}


var maxArea = function(height) {
    let i=0;
    let j=height.length-1;
    let m=0;
    while (i<j)
    {
        let w= min(height[i],height[j])*(j-i);
        if (w > m) m = w;
        if (height[i]<height[j]) i+=1; else j-= 1;
    }
    return m;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49

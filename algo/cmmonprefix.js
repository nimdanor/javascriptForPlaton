
// Écrivez une fonction pour trouver la chaîne de préfixe commune la plus longue parmi un tableau de chaînes.

// S'il n'y a pas de préfixe commun, renvoie une chaîne vide "".

// Exemple 1:
    ["Ville de Paris", "Ville de Marseille", "Ville de Lyon"]
    // Renvoie: "Ville de"
// Exemple 2:
    ["concat","Hi","Hello"]
    // Renvoie: ""


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    
    return prefix;
};
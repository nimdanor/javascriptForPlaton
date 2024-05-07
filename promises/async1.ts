




/*

Très dur ! Générique + Promise

Étant donné un tableau de fonctions asynchrones, renvoie une nouvelle promesse promise. Chaque fonction du tableau n'accepte aucun argument et renvoie une promesse. Toutes les promesses doivent être exécutées en parallèle.

la promesse résout :

     Lorsque toutes les promesses renvoyées par les fonctions ont été résolues avec succès en parallèle. La valeur résolue de la promesse doit être un tableau de toutes les valeurs résolues des promesses dans le même ordre que dans les fonctions. La promesse devrait être résolue lorsque toutes les fonctions asynchrones du tableau auront terminé leur exécution en parallèle.

promesse rejetée :

     Lorsque l’une des promesses renvoyées par les fonctions a été rejetée. la promesse doit également être rejetée avec la raison du premier rejet.

Veuillez le résoudre sans utiliser la fonction Promise.all intégrée.

*/



type Fn<T> = (() => Promise<T>);



function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
        let results: T[] = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn().then(result => {
                results[index] = result;
                completed += 1;

                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch(error => {
                reject(error);
            });
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42)),() => new Promise(res => res(131))])
 * promise.then(console.log); // [42, 131]
 */

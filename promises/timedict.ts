// Écrivez une classe qui permet d'obtenir et de définir des paires clé-valeur, mais un délai jusqu'à l'expiration est associé à chaque clé.

// La classe dispose de trois méthodes publiques :

// set(key, value, duration) : accepte une clé entière, une valeur entière et une durée en millisecondes. Une fois la durée écoulée, la clé devrait être inaccessible. La méthode doit renvoyer true si la même clé non expirée existe déjà et false sinon. La valeur et la durée doivent être écrasées si la clé existe déjà.

// get(key) : si une clé non expirée existe, elle doit renvoyer la valeur associée. Sinon, il devrait renvoyer -1.

// count() : renvoie le nombre de clés non expirées.


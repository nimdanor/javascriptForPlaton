
interface Personne {
    nom: string;
    age: number;
}


var n:string;
var a:number;
process.argv.forEach(function (val, index, array) {
    if (index >1){
        if (index % 2==0)
        {
            n = val;
        }
        else
        {
            a= parseInt(val);
            var p:Personne = { nom:n, age:a};
            console.log(p);

        }
      }
});
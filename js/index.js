// Iteration 1: Names and Input
//
let hacker1 = "daniel";
console.log("El nombre del conductor es " + hacker1 + ".");

let hacker2 = "jaun";
console.log("El nombre del navegante es " + hacker2 + ".");

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("El conductor tiene el nombre mas largo, tiene " + hacker1.length + " caracteres.");

} else if (hacker2.length > hacker1.length) {
    console.log("Pareece que el navegante tiene el nombre mas largo, tiene " +hacker2.length + " caracteres.");

} else if (hacker1.length === hacker2.length){
    console.log("¡Vaya, ambos tiene nombres iguales de largos, " + hacker1.length + " caracteres.!");
}

// Iteration 3: Loops
let nuevohacker1 = ""
for (let i = 0; i < hacker1.length; i++){
    nuevohacker1 += hacker1[i].toUpperCase () + " ";
}
console.log( nuevohacker1);

let inversa = "";
for (let i = hacker2.length - 1; i>= 0; i--) {
    inversa += hacker2[i]
    
}
console.log(inversa);



let hacker1Mayus = hacker1.toUpperCase();
let hacker2Mayus = hacker2.toUpperCase();

console.log("-------------FOR------------------");

for(let i = 0; i < hacker1Mayus.length && i < hacker2Mayus.length; i++){
     

    if (hacker1Mayus[i] < hacker2Mayus[i]) {       
        console.log("El nombre del conductor va primero."); 
        break;
    
    } else if ( hacker1Mayus[i] > hacker2Mayus[i] ){
        console.log("Yo, el navegador va primero definitivamente.");
        break;

    } else if(hacker1Mayus === hacker2Mayus){
        console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
        break;
    }

 }

// Bono1:
let cadena = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus dignissim ex. Donec mattis aliquet commodo. Ut maximus tincidunt mi, suscipit lobortis arcu egestas et. Quisque nec felis quis purus vulputate scelerisque. Vestibulum ut facilisis purus, vel viverra ex. Aenean non ex id nibh vestibulum tristique. Suspendisse at suscipit elit. Nulla tincidunt egestas massa, ac condimentum turpis vulputate id. Mauris pellentesque rhoncus sodales. Morbi hendrerit vitae est sed fermentum. Proin ultricies tortor vulputate nisl luctus, in tempus metus blandit. Cras ullamcorper felis vel augue posuere ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum faucibus condimentum porttitor. Proin congue tristique diam, id volutpat massa convallis eu. Donec egestas lorem ac mi commodo, a fringilla eros feugiat. Praesent sed rhoncus lorem. Aliquam ac lorem euismod ipsum porttitor dignissim ut sit amet neque. Donec mollis metus lacus, finibus hendrerit velit hendrerit sed. In vel massa pharetra, mattis tellus ut, sollicitudin enim. Praesent ac volutpat turpis. Maecenas lorem arcu, accumsan eu gravida sed, posuere ac tortor. Praesent nec augue tincidunt, gravida diam id, aliquet magna. In ut pulvinar libero. Morbi consectetur pretium tincidunt. Sed eget libero nisi. Proin mauris ante, venenatis nec tortor eu, sodales laoreet arcu. Maecenas euismod nisl a enim ornare auctor. Proin accumsan lacus felis, ut sollicitudin magna consequat id. Vivamus finibus risus sit amet egestas fermentum."

let totalPalabras = cadena.split('').length;
console.log("El texto tiene un total de "+ totalPalabras + " palabras.");

totalPalabras = cadena.split("et").length;
console.log("La palabra et aparece un todal de "+ totalPalabras +", veces.");
console.log("------------------\n");
console.log("------------------\n");

// Bono2:
let phraseToCheck ="amor";
console.log(phraseToCheck);

var rev = "roma"
rev = rev.split('').reverse().join("");
console.log(rev);

for (let i = 0; i< phraseToCheck.length && i< rev.length; i++ ){

    if (phraseToCheck[i] === rev[i]) {
        console.log("Es un Palindromo.");
        
        break
    } else {
        console.log("No es un palindromo.");
        break
    }
}


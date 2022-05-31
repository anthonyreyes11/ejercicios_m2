//Declaramos nuestras variables con "let" cuando sepamos que va a cambiar// 
const nombre = prompt("¿Cual es tu nombre?");
const saludo = 'hola ' + nombre;
alert(saludo)
let edad = prompt("¿Cual es tu edad?");
const mensaje ="Tu edad es " + edad + " años";
console.log(mensaje);
alert (mensaje)

// transformar la edad a valor numérico//
edad = parseInt(edad)


// ahora calculamos el numero de dias vividos//
dv=edad*365
apv = 81-edad
dpv= apv*365

//avisamos al usurio//
console.log(" usted ha vivido " + dv + " dias");
console.log("usted le quedan " + apv + " años por vivir");
console.log(" usted le quedan por vivir " + dpv + " días");

//Preguntamos//
const snack = prompt("¿Cual es tu snack favorito?");
let snackdia = prompt("¿Cuantos " + snack + " te comes al día?" );
//lo transformamos a numero//
snackdia= parseInt(snackdia)

sdv=snackdia*dv

//resp de cuantos snack se ha comido//
console.log("usted se ha comido " + sdv +" "+ snack);

spc=snackdia*dpv

//resp de cuantos snack te quedan por comer//
console.log("te quedan por comer " + spc  +" "+  snack);
//respuesta de cuantos has gastado en snack//

let costo_snack= prompt("¿Cuanto cuesta cada " + snack + " que te comes?" );

costo_snack= parseInt(costo_snack);
gasto_actual=costo_snack*dv;
gasto_futuro=costo_snack*dpv;

console.log("usted ha gastado " + gasto_actual+ " pesos " + "en " + snack);
console.log("usted gastará " + gasto_futuro+ " pesos " + " en " + snack);



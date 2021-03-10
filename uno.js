
function mostrar()
{
let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let seguir;

let flagProgramador=1
let acumuladorSueldoProgramador = 0;
let contadorSueldoProgramador=0;
let promedioSueldoProgramador;
let flagAnalista=1
let acumuladorSueldoAnalista=0;
let contadorSueldoAnalista = 0;
let promedioSueldoAnalista;
let flagQa = 1;
let acumuladorSueldoQa=0;
let contadorSueldoQa = 0;
let promedioSueldoQa;
let mejorSueldoM = 0;
let mejorSueldoF = 0;
let mejorSueldoNb = 0;
let nombreMejorSueldoFemenino;
let contadorNoBinario = 0;
let mejorSexo;
let flagNoBinario = 1;


do {

	nombre = prompt("Ingrese nombre: ");
	while(!isNaN(nombre)){
		nombre = prompt("Error. Ingreso un numero como nombre. Reingrese nombre");
		}
	edad = parseInt(prompt("Ingrese edad: "));
	while(isNaN(edad) && (edad<0)){
		edad = parseInt(prompt("Error. Ingreso una letra o un numero negativo"))
	}
	sexo = prompt("Ingrese sexo: f/m/nb (para no binario)");
	while(sexo !== "f" && sexo !=="m" && sexo !== "nb"){
		sexo = prompt("Error. Reingrese sexo: f/m/nb");
	}
	puesto = prompt("Ingrese puesto: programador/analista/qa");
	while(puesto !== "programador"&& puesto !=="analista" && puesto!=="qa"){
		puesto = prompt("Error. Reingrese puesto: programador/analista/qa");
	}
	sueldo = parseInt(prompt("Ingrese sueldo entre 15000 y 70000"));
	while((sueldo<15000 || sueldo>70000)){
		sueldo = parseInt(prompt("Error. Reingrese sueldo entre 15000 y 70000"));
	}

	switch(puesto){

		case "programador":
			if(flagProgramador){

				acumuladorSueldoProgramador = sueldo;
				contadorSueldoProgramador++;
				flagProgramador = 0;
			
			} else {
				acumuladorSueldoProgramador += sueldo;
				contadorSueldoProgramador++;
			}
		break;

		case "analista":
			if(flagAnalista){

				acumuladorSueldoAnalista = sueldo;
				contadorSueldoAnalista++;
				flagAnalista = 0;

			} else {
				acumuladorSueldoAnalista += sueldo;
				contadorSueldoAnalista++;
			}

		break;

		case "qa":
			if(flagQa){

				acumuladorSueldoQa = sueldo;
				contadorSueldoQa++;
				flagQa = 0;

			} else {
				acumuladorSueldoQa = sueldo;
				contadorSueldoQa++;
			}

		break;		

	}

	switch(sexo){

		case "m":

		if (mejorSueldoM<sueldo){

			mejorSueldoM = sueldo;
			mejorSexo = "Masculino";
		}
			

		break;

		case "f":

		if (mejorSueldoF<sueldo || flagFemenino){

			mejorSueldoF = sueldo;
			nombreMejorSueldoFemenino = nombre;
			mejorSexo = "Femenino";
			flagFemenino = 0;

		} else {
			mejorSueldoF = sueldo;
			nombreMejorSueldoFemenino = nombre;
		}

		break;

		case "nb":

		if (mejorSueldoNb<sueldo){

			mejorSueldoNb = sueldo;
			mejorSexo = "No binario";			
		}

		 if (((sueldo>20000 && sueldo<55000)||flagNoBinario)){

			contadorNoBinario = 1;
			flagNoBinario = 0;

		 }else{		 

			contadorNoBinario++;
		 }
		

		break;


	}

	seguir = prompt("Desea ingresar otro empleado? s/n : ");

} while(seguir == "s");	

promedioSueldoProgramador = (acumuladorSueldoProgramador/contadorSueldoProgramador);
promedioSueldoAnalista = acumuladorSueldoAnalista/contadorSueldoAnalista;
promedioSueldoQa = acumuladorSueldoQa/contadorSueldoQa;

if (contadorSueldoQa == 0 || contadorSueldoProgramador == 0 || contadorSueldoAnalista == 0){

	promedioSueldoQa = "No hubo QA ingresados";
	promedioSueldoProgramador = "No se ingresaron programadores";
	promedioSueldoAnalista = "No se ingresaron Analistas";
}

console.log("El sueldo promedio de programadores es: " + promedioSueldoProgramador); 
console.log("El sueldo promedio de analista es: " + promedioSueldoAnalista);
console.log("El sueldo promedio de un QA es: " + promedioSueldoQa);
console.log("El sexo del que percibe mayor sueldo es: " + mejorSexo);
console.log("El nombre del empleado femenino con mayor sueldo es: "+ nombreMejorSueldoFemenino);
console.log("La cantidad de prograadores no binarios que cobran sueldos entre 20000 y 55000 es: "+ contadorNoBinario);


	alert("Ejercicio 1");
}
/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
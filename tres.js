function mostrar()
{
	let nombreDelCliente;
	let cantidadDeLamparas;
	let marca;
	let precioPorUnidad;
	let totalDeLaCompra;
	let totalDeLaCompraConDescuentoUno;
	let totalDeLaCompraConDescuentoDos;
	let totalDeLaCompraSinDescuentoUno;
	let totalDeLaCompraSinDescuentoDos;
	let seguir;
	acumTotalDeLaCompraConDescuentoUno=0;
	acumTotalDeLaCompraSinDescuentoUno = 0;
	acumTotalDeLaCompraConDescuentoDos = 0;
	acumTotalDeLaCompraSinDescuentoDos = 0;
	let totalDelaCompraCierre;
	let perdidasPorDescuentos;
	acumuladorCantidadArgentinaLuz = 0
	contadorCantidadArgentinaLuz = 0;
	acumuladorCantidadFelipeLamparas = 0
	contadorCantidadFelipeLamparas = 0;
	acumuladorCantidadIlluminatis = 0
	contadorCantidadIlluminatis = 0;
	let marcaMax;
	let promedioFelipeLamparas;
	let promedioArgentinaLuz;
	let promedioIlluminatis;

	do{
		nombreDelCliente=prompt("Ingrese nombre del cliente: ");
		cantidadDeLamparas = parseInt(prompt("Ingrese cantidad de lamparas: "));
		marca = prompt("Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis")
		while(!isNaN(marca) && marca !== "FelipeLamparas" && marca !== "ArgentinaLuz" && marca !== "Illuminatis" ){
			marca = prompt("Error. Ingrese la marca correctamente: FelipeLamparas/ArgentinaLuz/Illuminatis");
		}
		precioPorUnidad = parseInt(prompt("Ingrese el precio por unidad"));

		totalDeLaCompra=precioPorUnidad*cantidadDeLamparas;


		switch(marca){

			case "FelipeLamparas":

				if(cantidadDeLamparas>5){

					totalDeLaCompraConDescuentoUno = totalDeLaCompra*9/10;

					acumTotalDeLaCompraConDescuentoUno += totalDeLaCompraConDescuentoUno;
				} else {

					totalDeLaCompraSinDescuentoUno = totalDeLaCompra;

					acumTotalDeLaCompraSinDescuentoUno =+ totalDeLaCompraSinDescuentoUno;
				} 
				acumuladorCantidadFelipeLamparas+=cantidadDeLamparas;
				contadorCantidadFelipeLamparas++;


			break;

			case "ArgentinaLuz":

				if(cantidadDeLamparas>3){
	
					totalDeLaCompraConDescuentoDos = totalDeLaCompra*19/20;

					acumTotalDeLaCompraConDescuentoDos += totalDeLaCompraConDescuentoDos;

				} else {
	
					totalDeLaCompraSinDescuentoDos = totalDeLaCompra;

					acumTotalDeLaCompraSinDescuentoDos += totalDeLaCompraSinDescuentoDos;
				}

				acumuladorCantidadArgentinaLuz += cantidadDeLamparas;
				contadorCantidadArgentinaLuz++;

			break;

			case "Illuminatis":

			acumuladorCantidadIlluminatis += cantidadDeLamparas;
			contadorCantidadIlluminatis ++;

			break;
		}

		seguir = prompt("Desesa ingresar otro cliente?: s/n");
	} while(seguir == "s");

	totalDelaCompraCierre = (acumTotalDeLaCompraSinDescuentoUno + acumTotalDeLaCompraSinDescuentoDos + acumTotalDeLaCompraConDescuentoUno + acumTotalDeLaCompraConDescuentoDos);
	perdidasPorDescuentos = (acumTotalDeLaCompraSinDescuentoUno + acumTotalDeLaCompraSinDescuentoDos) - (acumTotalDeLaCompraConDescuentoUno + acumTotalDeLaCompraConDescuentoDos);
	promedioFelipeLamparas = acumuladorCantidadFelipeLamparas/contadorCantidadFelipeLamparas;
	promedioArgentinaLuz = acumuladorCantidadArgentinaLuz/contadorCantidadArgentinaLuz;
	promedioIlluminatis = acumuladorCantidadIlluminatis/contadorCantidadIlluminatis;

	if(contadorCantidadFelipeLamparas==0){

		promedioFelipeLamparas = "No hubo compras de Felipe Lamparas";
	}

	if (contadorCantidadArgentinaLuz==0){

		promedioArgentinaLuz = "No se registran compras de lamparas Argentina Luz";
	}

	if (contadorCantidadIlluminatis == 0){

		promedioIlluminatis = "No se registran compras de lamparas Illuminatis";

	}

	if (promedioFelipeLamparas>promedioArgentinaLuz && promedioFelipeLamparas>promedioIlluminatis){

		marcaMax = "Felipe Lamparas"

	} else if (promedioArgentinaLuz>promedioFelipeLamparas&&promedioArgentinaLuz>promedioIlluminatis){

		marcaMax = "Argentina Luz";
	
	} else{

		marcaMax = "Illuminatis";
	}
	
	console.log("La empresa recauda en ventas realizadas: " + totalDelaCompraCierre);
	console.log("La empresa pierde por concepto de descuentos: " + perdidasPorDescuentos);
	console.log("El promedio de lamparas Felipe lamparas es: " + promedioFelipeLamparas);
	console.log("El promedio de lamparas ArgentinaLuz es: " + promedioArgentinaLuz);
	console.log("El promedio de lamparas Illuminatis es: " + promedioIlluminatis);
	console.log("La marca que mas ventas realizo fue " + marcaMax);
	
}

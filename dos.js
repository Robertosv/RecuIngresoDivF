function mostrar()
{
    let alumno;
    let nombre;
    let mejorFisica;
    let nombreDeCarrera;
    let sexo;
    let cantidadDeMaterias;
    let notaPromedio;
    let mejorNotaFisica;
    let edad;
    let edadMasJoven;
    let flagMasJoven = 1;
    let acumuladorFisica = 0;
    let acumuladorQuimica = 0;
    let acumuladorSistemas = 0;
    let contadorFisica = 0;
    let contadorQuimica = 0;
    let contadorSistemas = 0;
    let porcentajeFisica;
    let porcentajeQuimica;
    let porcentajeSistemas;
    let flagFisica = 1;
    let cantidadDeMateriasMaximoFisica = 0;
    let nombreFisica;
    let edadFisica;
    let nombreSistemas;
    let edadSistemas;
    let cantidadDeMateriasMaximoSistemas;
    let flagSistemas = 1;
    let nombreMaximo;
    let edadMaxima;
    let flagMasMateriasFisica=1;
    let flagMasMateriasSistemas=1;
    
    
    for(alumno=1; alumno<500 ; alumno++){
    
        nombre = prompt("INtroduzca nombre: ");
        nombreDeCarrera = prompt("Introduzca nombre de carrera: quimica/fisica/sistemas");
        sexo = prompt("Introduzca Sexo: m:masculino/f:femenino/nb:No binario");
        cantidadDeMaterias = parseInt(prompt("Introduzca Cantidad de materias: entre 1 y 5"));
        notaPromedio = parseInt(prompt("Introduzca nota promedio: del 1 al 10"));
        edad = parseInt(prompt("Ingrese edad"));
        while(!isNaN(edad) && edad<0){
        edad = parseInt(prompt("Error ingrese correctamente edad. Numero positivo y que no contenga letras"));
        }
    
        switch (nombreDeCarrera){
    
            case "fisica":
    
            if (mejorNotaFisica<notaPromedio||flagFisica){
    
                mejorNotaFisica = notaPromedio;
    
                mejorFisica = nombre;

                flagFisica = 0;
           
            }
            
    
            if (cantidadDeMateriasMaximoFisica<cantidadDeMaterias || flagMasMateriasFisica){
    
                nombreFisica = nombre;
    
                edadFisica = edad;
    
                cantidadDeMateriasMaximoFisica = cantidadDeMaterias;

                flagMasMateriasFisica = 0;

                }
    
            contadorFisica++;           
    
            break;
    
            case "quimica":
 
            contadorQuimica++;
               
            break;
    
            case "sistemas":
    
               if (cantidadDeMateriasMaximoSistemas<cantidadDeMaterias){
        
                    nombreSistemas = nombre;
        
                    edadSistemas= edad;
    
                    cantidadDeMateriasMaximoSistemas = cantidadDeMaterias;

                } else if (cantidadDeMateriasMaximoFisica > cantidadDeMateriasMaximoSistemas){
    
                    nombreMaximo = nombre;
                    edadMaxima = edad;

                } else if (cantidadDeMateriasMaximoFisica = cantidadDeMateriasMaximoSistemas){
    
                    nombreMaximo = "Existen varias personas con la misma cantidad de materias";
                    edadMaxima = edad;
        
                } else {
        
                    nombreMaximo = nombre;
                    edadMaxima = edad; 
                    
                }
    
            contadorSistemas++;
    
            break;         
                
            
        }
    
        if (sexo == "f" && flagMasJoven){
    
            nombreMasJoven = nombre;

            flagMasJoven = 0;            
    
        } else if (edadMasJoven>edad && sexo == "f") {
    
            nombreMasJoven = nombre;
    
        }
    
        
    }
    
    porcentajeFisica = contadorFisica*100/500;
    porcentajeQuimica = contadorQuimica*100/500;
    porcentajeSistemas = contadorSistemas*100/500;

    if (contadorFisica == 0){

        nombreFisica = "No se ingresaron estudiantes de fisica";
        
    } 
    
    console.log("El nombre del mejor alumno de los que estudian fisica es: "+ mejorFisica);
    console.log("El nombre de la alumna mas joven es: "+ nombreMasJoven);
    console.log("El porcentaje de estudiantes de fisica es: "+porcentajeFisica + "El porcentaje de  estudiantes de Quimica es: "+ porcentajeQuimica + "El porcentaje de estudiantes de sistemas es: "+ porcentajeSistemas);
    console.log("La edad y nombre del estudiante que cursa mas materias exceptuando quimica es: " +edadMaxima +" años. Y es: " + nombreMaximo);
         
    
    
}



/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
    nombre,
    carrera("Quimica";"Fisica";"Sistemas"),
    sexo (masculino - femenino -no binario),
    cantidad de materias(entre 1 y 5),
    Nota promedio del alumno(entre 0 y 10),
    edad (validar).
    Se debe informar de existir, o informar que no existe , en el caso que corresponda.
    a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    b) El nombre de la alumna mas joven.
    c) Porcentaje de estudiantes que estudia cada carrera.
    d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

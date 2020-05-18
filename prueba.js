// Try edit message
function totalMinutos(horas,minutos){
  return((horas*60)+minutos)
}
var totalM=totalMinutos(5,25);
console.log("El total en minutos es :"+totalM);
console.log("________________________________");
function cantidadRecolectadaSimple(personas,contribucion){
  return(personas*contribucion)
}
var cantidadContribucion=cantidadRecolectadaSimple(10,5);
console.log("La cantidad de Contribución es: Q"+cantidadContribucion)
console.log("________________________________");
function cantidadRecolectada(costoEstudiante,costoAdulto,cantidadEstudiantes,cantidadAdultos){
  return("la cantidad recolectada es:Q"+ ((costoEstudiante*cantidadEstudiantes)+(costoAdulto*cantidadAdultos)))
}
var contribucionCompuesta=cantidadRecolectada(1, 5, 20, 4);
console.log(contribucionCompuesta)

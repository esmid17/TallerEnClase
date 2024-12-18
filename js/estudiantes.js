const estudiantes = [
    {nombre: "Juan", calificaciones: [10, 8, 6, 9, 7]},
    {nombre: "Pedro", calificaciones: [9, 7, 5, 3, 7]},
    {nombre: "Eduardo", calificaciones: [7, 9, 10, 9, 8]},
    {nombre: "Ronnie", calificaciones: [6, 4, 7, 9, 10]},
    {nombre: "César", calificaciones: [8, 5, 4, 8, 9]},
    {nombre: "Frank", calificaciones: [7, 4, 7, 6, 6]},
    {nombre: "Samir", calificaciones: [9, 9, 10, 8, 5]},
    {nombre: "Diego", calificaciones: [7, 8, 6, 10, 9]},
    {nombre: "Micaela", calificaciones: [7, 7, 6, 10, 10]},
    {nombre: "Mateo", calificaciones: [10, 9, 10, 7, 9]},
];

//Clasificacion por calificacion
for (let i = 0; i < estudiantes.length; i++) {
    const calificaciones = estudiantes[i].calificaciones;
    let suma = 0;
    for (let j = 0; j < calificaciones.length; j++) {
      suma += calificaciones[j];
    }
    let promedio = suma / calificaciones.length;
    let clasificacion;
    if (promedio >= 16)
        { 
        clasificacion = "Excelente";
    }
    else if (promedio >= 12) 
        {
            clasificacion = "Bueno";
        }
    else if (promedio >= 8)
        {
            clasificacion = "Aprobado";
        } 
    else 
    {
        clasificacion = "Reprobado";
    }

    estudiantes[i].promedio = promedio;
    estudiantes[i].clasificacion = clasificacion;
  }
 
  for (let i = 0; i < estudiantes.length; i++) 
    {
    const calificaciones = estudiantes[i].calificaciones;
    let maxNota = calificaciones[0];
    let minNota = calificaciones[0];
    for (let j = 1; j < calificaciones.length; j++) {
      if (calificaciones[j] > maxNota) 
        {
            maxNota = calificaciones[j];
        }
      else if (calificaciones[j] < minNota)
        {
            minNota = calificaciones[j];
        } 
    }
    estudiantes[i].maxNota = maxNota;
    estudiantes[i].minNota = minNota;
  }

  let peorPromedio = estudiantes[0];
  let mejorPromedio = estudiantes[0];
  
  for (let i = 1; i < estudiantes.length; i++) 
    {
    if (estudiantes[i].promedio < peorPromedio.promedio)
        { 
            peorPromedio = estudiantes[i];
        }
    if (estudiantes[i].promedio > mejorPromedio.promedio)
        { 
            mejorPromedio = estudiantes[i];
        }
  }
  
  console.log("Resultados de los estudiantes:");

  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Calificaciones:`, estudiante.calificaciones);
    console.log(`Promedio:`, estudiante.promedio);
    console.log(`Clasificación: ${estudiante.clasificacion}`);
    console.log(`Máxima calificación: ${estudiante.maxCalif}`);
    console.log(`Mínima calificación: ${estudiante.minCalif}`);
    console.log("------------------------------------------");
  }
  
  console.log("Estudiante con peor promedio:", peorPromedio);
  console.log("Estudiante con mejor promedio:", mejorPromedio);
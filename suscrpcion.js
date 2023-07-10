
/*base de datos en js*/

const suscripcion = [ 
    {nombre:'ariela', mail:'acrnicolini@yahoo.com.ar'},
    {nombre:'vernica', mail:'vero@gmail.com'},
    {nombre: 'peggy', mail: 'peggy@gmail.com'}
]
console.log (suscripcion, "suscriptos")

/*conversion a json*/
let datoConvertido = JSON.stringify(suscripcion);
console.log (datoConvertido);

/* convertir a js y agregar elemento*/

let jsonConvertido = JSON.parse(datoConvertido)
console.log (jsonConvertido)
suscripcion.push ({nombre: 'ignacio', mail:'ignacio@gmail.com'})
console.log (suscripcion)

/*almacenamineto en LS: Dado el tipo de página es difícil encontrar datos para almacenar en el LS, podríamos pensar en dos tipos de suscripciones, una free y la otra con costo y en este último caso guardar los datos del inicio de sesión ya que accederían a servicios diferenciales.*/

/*usuario podr[a ver datos de suscripcion*/
let suscripcion = require('./datos.json')
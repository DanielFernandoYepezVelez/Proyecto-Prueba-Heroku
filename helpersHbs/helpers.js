/* Estos helpers son utiles para cuando se esta repitiendo
codigo destinado a las vistas de los TEMPLATE ENGINE y si este TEMPLATE require el helper, este se dispara de forma automatica */

/* Si al render no le llegan ningun dato, entonces HBS va a buscar en sus helpers y asigna los datos por defecto */
/* res.render('home', {
  nombre: "daNIel feRNando", // Este va a ser capitalize
  // anio: new Date().getFullYear() Supongamos que no existe, entonces solicita en los HELPERS Registrados que en este caso es getAnio
}); */


/* No debo exportarlo por que, al crearlos quedan registrados en
Handlebars directamente */
const hbs = require('hbs');

/* Estos Helpers Se Envian A las Vistas de .hbs Donde son requeridos los datos */
/* Helper Sin Recibir Un Parametro */
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

/* Helper Con Un Parametro, string Capitalizado */
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Este Codigo Lo CapitalizaS
    });

    return palabras.join(' ');
});
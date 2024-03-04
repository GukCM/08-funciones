document.addEventListener('DOMContentLoaded', function() {
    // Ejercicio 1: Mayúsculas y Minúsculas
    let texto1 = "Hola Mundo";
    let mayusculas = texto1.toUpperCase();
    let minusculas = texto1.toLowerCase();
    mostrarResultado("Ejercicio 1: Mayúsculas y Minúsculas", "Mayúsculas: " + mayusculas + ", Minúsculas: " + minusculas);

    // Ejercicio 2: Contando Caracteres
    let texto2 = "JavaScript es asombroso";
    let contador = 0;
    for (let i = 0; i < texto2.length; i++) {
        if (texto2[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    mostrarResultado("Ejercicio 2: Contando numero de 'a's en JavaScript es asombroso", "Número de 'a's: " + contador);

    // Ejercicio 3: Extracción de Subcadenas
    let texto3 = "Desarrollo con JavaScript";
    let subcadena = texto3.substring(texto3.indexOf("JavaScript"), texto3.indexOf("JavaScript") + "JavaScript".length);
    mostrarResultado("Ejercicio 3: Extracción de Subcadenas", "Subcadena: " + subcadena);

    // Ejercicio 4: Comparación de Cadenas
    let texto4a = "Hola";
    let texto4b = "hola";
    let sonIguales = texto4a.toLowerCase() === texto4b.toLowerCase();
    mostrarResultado("Ejercicio 4: Comparación de Cadenas", "¿Las cadenas son iguales (ignorando mayúsculas y minúsculas Hola y hola)?: " + sonIguales);

    // Ejercicio 5: Concatenación
    let texto5a = "Hola";
    let texto5b = "Mundo";
    let concatenado = texto5a + " " + texto5b;
    mostrarResultado("Ejercicio 5: Concatenación de 'Hola' y 'Mundo'", "Concatenado: " + concatenado);

    // Ejercicio 6: Eliminación de Espacios
    let texto6 = "    JavaScript    ";
    let sinEspacios = texto6.trim();
    mostrarResultado("Ejercicio 6: Eliminación de Espacios", "Sin espacios: '" + sinEspacios + "'");

    // Ejercicio 7: Reemplazo de Palabras
    let texto7 = "JavaScript es genial";
    let reemplazado = texto7.replace("genial", "asombroso");
    mostrarResultado("Ejercicio 7: Reemplazo de Palabras genial por asombroso", "Reemplazado: " + reemplazado);

    // Ejercicio 8: Inversión de Cadena
    let texto8 = "Desarrollo";
    let invertido = texto8.split("").reverse().join("");
    mostrarResultado("Ejercicio 8: Inversión de Cadena: Desarrollo", "Invertido: " + invertido);

    // Ejercicio 9: División en Array
    let texto9 = "manzana,banana,cereza";
    let array = texto9.split(",");
    mostrarResultado("Ejercicio 9: División en Array con cadena: manzana,banana,cereza", "Array: " + array);

    // Ejercicio 10: Encuentra la Posición
    let texto10 = "Aprendiendo JavaScript";
    let posicion = texto10.indexOf("JavaScript");
    mostrarResultado("Ejercicio 10: Encuentra la Posición de la palabra Javascript en la oracion: Aprendiendo Javascript", "Posición de 'JavaScript': " + posicion);

});

function mostrarResultado(titulo, resultado) {
    let output = document.getElementById("output");
    output.innerHTML += "<p><strong>" + titulo + "</strong><br>" + resultado + "</p>";
}

console.log("hola mundo");
var hola = "hola";
var adios = "adiós";
var variables;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var david = new Usuario("David", false, 22);
console.log(david);

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
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imrpimirUsuario = function (saludo) {
        //template string
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var david2 = new UsuarioDos("david", false, 22);
console.log(david2);
console.log(david2.imrpimirUsuario("hola"));

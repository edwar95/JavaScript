var arreglonumeros = [1, 2, 3, 4, 5];
//fat arrow function
var sumarDosNumero = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumarDosNumeroV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var potenciaDeUnNumero = function (numero) { return numero * numero; };
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
var sumaTotal = 0;
var resultadoForEach = arreglonumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    /* console.log(valorActual);
     console.log(indiceActual);
     console.log(arreglo);*/
});
var resultadoSumaConReduce = arreglonumeros
    .reduce(function (valorAcumuladoActual, valorActualArreglo) {
    //console.log("valor acumulado actual", valorAcumuladoActual);
    //console.log("valor actual del arreglo", valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
//let arregloUsuarios:Array<UsuarioArreglo>=[]
var arregloUsuarios = [
    {
        nombre: "david",
        edad: 28
    },
    {
        nombre: "david",
        edad: 10
    },
    {
        nombre: "david",
        edad: 68
    },
    {
        nombre: "david",
        edad: 32
    },
    {
        nombre: "david",
        edad: 18
    },
];
//console.log(resultadoSumaConReduce),
//console.log(sumaTotal);
var resultadoEdad = arregloUsuarios
    .reduce(function (valorEdadAcumulado, usuario) {
    return valorEdadAcumulado + usuario.edad;
}, 0);
//console.log(resultadoEdad);
var nuevoArregloDeUsuarios = arregloUsuarios.map(//arreglo transformado o mutado
function (usuario) {
    usuario.becado = false;
    return usuario;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    return usuario.deuda < 50;
});
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) {
        return total + usuario.edad;
    }, 0);
    return totalEdad * (edadUsuario / 100);
}
console.log(nuevoArregloDeUsuarios);

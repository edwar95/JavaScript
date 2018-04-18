console.log('hola mundo');
var nombre = 'david';
var edad = '22';
var peso = '150';
var casado = 'false';
var fechaNac = 'new Date()';
var noExisto = null;
var noEstoyDefinido = undefined;

/**
 1 y -1 es verdadero, 0 es falso
 cmd+a = seleccionar all
 cmd+shift+l= identar
 **/
var variable=1;
if (variable) {
    //console.log('Verdadero');
} else {
    //console.log('falso');
}


//JSON
//en JS los JSON son objetos
var usuario={
    name:'david',
    lastName:'morales',
    cedula:1234567890,
    imprimir:function(){
        console.log(this.name + ' '+this.lastName);
    }
};

/*console.log(usuario.cedula);
console.log(usuario);
delete usuario.cedula;
console.log(usuario);
usuario.edad=22
console.log(usuario);
usuario.mascotas={};
usuario.mascotas.nombre='ed';
console.log(usuario);*/
//arreglos
var arreglos=[1,"david",true,undefined,null,new Date(),{nombre:'david'},[1,2,3]];
//console.log(arreglos);

//FUNCIONES
function sumarNumeros(numeroUno,numeroDos){
 return numeroUno + numeroDos;
}
console.log(sumarNumeros(1,2.223));
//funciones anónimas
var potenciaDeDosDeUnNumero = function (numero){
return numero*numero;
};
console.log(potenciaDeDosDeUnNumero(2));
console.log(usuario.imprimir());
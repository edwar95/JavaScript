let arreglonumeros = [1,2,3,4,5];
//fat arrow function
let sumarDosNumero=(numeroUno:number,numeroDos:number):number=>{return numeroUno+numeroDos};
let sumarDosNumeroV2=(numeroUno:number,numeroDos:number):number=> numeroUno+numeroDos;

let potenciaDeUnNumero = numero =>{return numero*numero};
let potenciaDeUnNumeroV2 = numero => numero*numero;

let sumaTotal=0;
let resultadoForEach = arreglonumeros.forEach((valorActual,indiceActual,arreglo)=>{
    sumaTotal=sumaTotal + valorActual;
       /* console.log(valorActual);
        console.log(indiceActual);
        console.log(arreglo);*/

    }
);
let resultadoSumaConReduce=arreglonumeros
    .reduce(
    (valorAcumuladoActual,valorActualArreglo)=>{
        //console.log("valor acumulado actual", valorAcumuladoActual);
        //console.log("valor actual del arreglo", valorActualArreglo);
        return valorAcumuladoActual-valorActualArreglo
    },
        20
);
//let arregloUsuarios:Array<UsuarioArreglo>=[]
let arregloUsuarios: UsuarioArreglo[]=[
    {
        nombre:"david",
        edad:28
    },
    {
        nombre:"david",
        edad:10
    },
    {
        nombre:"david",
        edad:68
    },
    {
        nombre:"david",
        edad:32
    },
    {
        nombre:"david",
        edad:18
    },
]

interface UsuarioArreglo{
        nombre:string;
        edad:number;
        deuda?:number;
        becado?:boolean;
}

//console.log(resultadoSumaConReduce),
//console.log(sumaTotal);
let resultadoEdad=arregloUsuarios
    .reduce(
        (valorEdadAcumulado:number,usuario:UsuarioArreglo)=>{

            return valorEdadAcumulado+usuario.edad;
        },
        0
    );
//console.log(resultadoEdad);

let nuevoArregloDeUsuarios= arregloUsuarios.map(//arreglo transformado o mutado
    (usuario:UsuarioArreglo)=>{
        usuario.becado=false;
        return usuario;
        }
    )
    .map(
        (usuario:UsuarioArreglo)=>{
            usuario.deuda=calcularDeuda(usuario.edad);
            return usuario;
        }


    )
    .filter(
        (usuario:UsuarioArreglo)=>{
            return usuario.deuda<50;
        }
    )
    .some(
        (usuario:UsuarioArreglo)=>{
            return usuario.edad<18;
        }
    )


function calcularDeuda(edadUsuario:number){
    const totalEdad= arregloUsuarios.reduce((total, usuario:UsuarioArreglo)=>
        total+usuario.edad,0
    )
    return totalEdad*(edadUsuario/100);
}

console.log(nuevoArregloDeUsuarios);
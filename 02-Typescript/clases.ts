console.log("hola mundo");
let hola="hola";
const adios= "adiós";
let variables:string;

class Usuario{
    public nombre:string;
    private casado:boolean;
    protected edad:number;
    constructor(nombre:string, casado:boolean, edad:number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}
let david :Usuario= new Usuario("David", false,22);
console.log( david);
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

class UsuarioDos{
    constructor(public nombre:string,  private _casado:boolean, protected _edad:number){
    }
    get casado(){
        return this._casado;
    }
    set casado(casado:boolean){
        this._casado=casado;
    }
    imrpimirUsuario(saludo:string):string{
        //template string
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this._edad}`;
    }
}

let david2 :UsuarioDos=new UsuarioDos("david",false,22);
console.log(david2)
console.log(david2.imrpimirUsuario("hola"));
export class Usuario{
    id:number;
    nombre:string;
    apellido:string;
    dni:string;
    foto:string
    sexo:string;

    constructor() {
        this.id = -1;
        this.nombre = "";
        this.apellido = "";
        this.foto = "";
        this.dni = "";
        this.sexo = "";
    }
}
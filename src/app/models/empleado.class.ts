export class Empleado{
    constructor(
        //defino las propiedades de la entidad proyecto que existe en api
        public codigo:number,
        public nombre: String,
        public hs_normales: number,
       public  hs_extras:number,
       public sueldo:number
            ){}
}


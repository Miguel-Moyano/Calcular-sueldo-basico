import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado.class';
 

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {
  public ListaEmpleados: Empleado[]=[];

  constructor() {
    this.cargarStorage();
   }

  cargarStorage(){
    if(localStorage.getItem('Empleados')){
      this.ListaEmpleados= JSON.parse(localStorage.getItem('Empleados'));
     //this.ordenar(this.ListaEmpleados);
      this.ListaEmpleados.sort(function (a, b){
      return (b.sueldo - a.sueldo)
  })


    }
    
    
     else{
       this.ListaEmpleados= [];
     }
  
    }

    guardarStorage(empleado:Empleado) {
      this.ListaEmpleados.push(empleado);
      localStorage.setItem('Empleados', JSON.stringify(this.ListaEmpleados))
    }

    getListaEmpleados(){
      return this.ListaEmpleados;
    }

    delete(indice:number){
      console.log(indice);
      this.ListaEmpleados.splice(indice,1);
      localStorage.setItem('Empleados', JSON.stringify(this.ListaEmpleados))
    }

    buscarEmpleado(termino:string):any{ //busca por nombre //esta funciova a regresar un empleado 
      let empleadoEncontrado:Empleado;
      let encontrado=false;;
      termino =  termino.toLowerCase();//pasar a minuscula porque puede ve venir con varias forma
      for (let  i=0; i<this.ListaEmpleados.length; i++ ){
        let empleado= this.ListaEmpleados[i];
      
        let nombre= empleado.nombre.toLowerCase();
        if (nombre == termino){  //si el nombre es igual al termino de busca es
          empleadoEncontrado= this.ListaEmpleados[i];
          return empleadoEncontrado;
          encontrado = true;
        }
        }
        if(encontrado){
          
            let respuesta:{
              status: false;
  
            }
            return respuesta;
              
            }
        }

        maxSueldo():Empleado{
          let empleadoMax: Empleado;
          let max = this.ListaEmpleados[0].sueldo;
          empleadoMax= this.ListaEmpleados[0];
          for (let i=0; i<this.ListaEmpleados.length; i++){
           
            
             
            if (this.ListaEmpleados[i].sueldo > max){
              empleadoMax= this.ListaEmpleados[i];
              console.log('ahora paso por: ',this.ListaEmpleados[i])
            } 
          }
          console.log(empleadoMax);
          return empleadoMax;
          
        }

        ordenar(arreglo:Empleado[]){
          for (let i=0; i<arreglo.length; i++){
            for (let j=0; j<arreglo.length; j++){
              let aux :Empleado;
              if(arreglo[i].sueldo > arreglo[j].sueldo){
                aux= arreglo[i];
                arreglo[i]= arreglo[j];
                arreglo[j]= aux;
              }
            }
            
          }

        }


          
}

     
    

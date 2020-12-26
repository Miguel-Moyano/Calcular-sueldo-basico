import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.class';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
 


@Component({
  selector: 'app-carga-empleado',
  templateUrl: './carga-empleado.component.html',
  styleUrls: ['./carga-empleado.component.css']
})
export class CargaEmpleadoComponent implements OnInit {
public nuevo_empleado: Empleado;
public empleados: Empleado[]=[];
public valorhs:number;
public id=1;

public lista: Empleado[]=[];
public resp: Empleado;

  public EmpleadoMaxSueldo: Empleado;

  constructor(
    
    private empleadoService: EmpleadoServiceService
  ) {
    this.valorhs= 150; 
    this.nuevo_empleado= new Empleado(null, '',null,null, null);
    this.getList();
    this.sueldoMax();

  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this.nuevo_empleado.codigo+= this.id;
    this.nuevo_empleado.nombre= this.nuevo_empleado.nombre;
    this.nuevo_empleado.sueldo= this.nuevo_empleado.hs_normales*this.valorhs;
    if(this.nuevo_empleado.hs_extras>0){
      this.nuevo_empleado.sueldo+=this.nuevo_empleado.hs_extras*(this.valorhs*2); 
    } 
     this.empleadoService.guardarStorage(this.nuevo_empleado);


    form.reset();
     
}

getList(){
  this.lista= this.empleadoService.getListaEmpleados();
 // console.log('La lista: ', this.lista);
}
buscar(dato:string){
 this.resp = this.empleadoService.buscarEmpleado(dato);
 
}

sueldoMax(){
  this.EmpleadoMaxSueldo = this.empleadoService.maxSueldo();
 
}



}

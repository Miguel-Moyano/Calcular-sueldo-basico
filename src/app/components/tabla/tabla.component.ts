import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoServiceService } from '../../services/empleado-service.service';
import { Empleado } from '../../models/empleado.class';
 

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public empleados: Empleado[]=[];
  @Input() empleadoEncontrado:Empleado;


  constructor(
    private serviceEmpleado: EmpleadoServiceService
  ) {
    this.getEmpleados();
   }

  ngOnInit(): void {
  }


  getEmpleados(){
    this.empleados= this.serviceEmpleado.getListaEmpleados();
  }
  deleteEmpleado(index:number){
    this.serviceEmpleado.delete(index);

  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaEmpleadoComponent } from './components/carga-empleado/carga-empleado.component';


const routes: Routes = [
  {path: '',component: CargaEmpleadoComponent},
  {path: 'cargar_empleado', component: CargaEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEmpleadoComponent } from './carga-empleado.component';

describe('CargaEmpleadoComponent', () => {
  let component: CargaEmpleadoComponent;
  let fixture: ComponentFixture<CargaEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

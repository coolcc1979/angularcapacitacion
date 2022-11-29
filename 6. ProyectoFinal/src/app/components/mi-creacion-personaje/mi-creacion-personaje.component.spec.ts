import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCreacionPersonajeComponent } from './mi-creacion-personaje.component';

describe('MiCreacionPersonajeComponent', () => {
  let component: MiCreacionPersonajeComponent;
  let fixture: ComponentFixture<MiCreacionPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiCreacionPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCreacionPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

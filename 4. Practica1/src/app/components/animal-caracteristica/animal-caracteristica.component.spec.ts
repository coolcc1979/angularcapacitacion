import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCaractetisticaComponent } from './animal-caracteristica.component';

describe('AnimalCaractetisticaComponent', () => {
  let component: AnimalCaractetisticaComponent;
  let fixture: ComponentFixture<AnimalCaractetisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCaractetisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCaractetisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

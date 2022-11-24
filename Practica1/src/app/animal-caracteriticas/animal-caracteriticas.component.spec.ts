import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCaracteriticasComponent } from './animal-caracteriticas.component';

describe('AnimalCaracteriticasComponent', () => {
  let component: AnimalCaracteriticasComponent;
  let fixture: ComponentFixture<AnimalCaracteriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCaracteriticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCaracteriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

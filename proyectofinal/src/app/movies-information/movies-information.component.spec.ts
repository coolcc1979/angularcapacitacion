import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesInformationComponent } from './movies-information.component';

describe('MoviesInformationComponent', () => {
  let component: MoviesInformationComponent;
  let fixture: ComponentFixture<MoviesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

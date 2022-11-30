import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHeroesComponent } from './informacion-heroes.component';

describe('InformacionHeroesComponent', () => {
  let component: InformacionHeroesComponent;
  let fixture: ComponentFixture<InformacionHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

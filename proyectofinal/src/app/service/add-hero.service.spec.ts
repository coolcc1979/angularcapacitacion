import { TestBed } from '@angular/core/testing';

import { AddHeroService } from './add-hero.service';

describe('AddHeroService', () => {
  let service: AddHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

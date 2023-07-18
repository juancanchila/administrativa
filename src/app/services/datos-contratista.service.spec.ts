import { TestBed } from '@angular/core/testing';

import { DatosContratistaService } from './datos-contratista.service';

describe('DatosContratistaService', () => {
  let service: DatosContratistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosContratistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

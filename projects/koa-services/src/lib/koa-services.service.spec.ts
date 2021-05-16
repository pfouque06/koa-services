import { TestBed } from '@angular/core/testing';

import { KoaServicesService } from './koa-services.service';

describe('KoaServicesService', () => {
  let service: KoaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

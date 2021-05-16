import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoaServicesComponent } from './koa-services.component';

describe('KoaServicesComponent', () => {
  let component: KoaServicesComponent;
  let fixture: ComponentFixture<KoaServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoaServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

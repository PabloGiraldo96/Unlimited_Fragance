import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocionesComponent } from './lociones.component';

describe('LocionesComponent', () => {
  let component: LocionesComponent;
  let fixture: ComponentFixture<LocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

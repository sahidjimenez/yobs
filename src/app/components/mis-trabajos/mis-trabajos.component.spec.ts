import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTrabajosComponent } from './mis-trabajos.component';

describe('MisTrabajosComponent', () => {
  let component: MisTrabajosComponent;
  let fixture: ComponentFixture<MisTrabajosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTrabajosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

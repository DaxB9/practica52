import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpfComponent } from './dpf.component';

describe('DpfComponent', () => {
  let component: DpfComponent;
  let fixture: ComponentFixture<DpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

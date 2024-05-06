import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizeFunctionComponent } from './minimize-function.component';

describe('MinimizeFunctionComponent', () => {
  let component: MinimizeFunctionComponent;
  let fixture: ComponentFixture<MinimizeFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimizeFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimizeFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

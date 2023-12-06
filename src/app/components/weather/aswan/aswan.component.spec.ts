import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AswanComponent } from './aswan.component';

describe('AswanComponent', () => {
  let component: AswanComponent;
  let fixture: ComponentFixture<AswanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AswanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AswanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

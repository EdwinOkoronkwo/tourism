import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxorComponent } from './luxor.component';

describe('LuxorComponent', () => {
  let component: LuxorComponent;
  let fixture: ComponentFixture<LuxorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuxorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuxorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

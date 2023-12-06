import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharmComponent } from './sharm.component';

describe('SharmComponent', () => {
  let component: SharmComponent;
  let fixture: ComponentFixture<SharmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

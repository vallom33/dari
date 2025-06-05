import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DariHomeButtonComponent } from './dari-home-button.component';

describe('DariHomeButtonComponent', () => {
  let component: DariHomeButtonComponent;
  let fixture: ComponentFixture<DariHomeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DariHomeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DariHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationFormComponent } from './identification-form.component';

describe('IdentificationFormComponent', () => {
  let component: IdentificationFormComponent;
  let fixture: ComponentFixture<IdentificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdentificationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdentificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

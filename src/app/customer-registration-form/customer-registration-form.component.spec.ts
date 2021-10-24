import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationFormComponent } from './customer-registration-form.component';

describe('CustomerRegistrationFormComponent', () => {
  let component: CustomerRegistrationFormComponent;
  let fixture: ComponentFixture<CustomerRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

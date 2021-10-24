import { Component, OnInit } from '@angular/core';
import { CustomerInfoService } from 'src/service/customer-info.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
  MaxLengthValidator,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ViewFormComponent } from './view-form/view-form.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  
  selector: 'app-customer-registration-form',
  templateUrl: './customer-registration-form.component.html',
  styleUrls: ['./customer-registration-form.component.css']
})
export class CustomerRegistrationFormComponent implements OnInit {
  companyDetail!: FormGroup;
  submitted = false;
  submitBtn = false;
  products:any;
  viewForm: any;
  
  constructor(private fb: FormBuilder,
    public router: Router,
    private CustomerInfoService: CustomerInfoService) {
      
    this.companyDetail = this.fb.group({

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required,Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      arrObj: this.fb.array([]),
    });
    console.log('companyDetail=>', this.companyDetail);
  }

  ngOnInit(): void {
 
      
  

    this.addAction();

  }

  addAction() {
    this.submitBtn = false;
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.companyDetail.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    this.submitBtn = false;
    return this.fb.group({
      names: ['', Validators.required],
      emails: ['', [Validators.required,Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      number: ['', [Validators.required, Validators.maxLength(10)]],
      city: ['', Validators.required],
      address: ['', Validators.required],

    });
  }
  onFormSubmit() {

    this.submitBtn = true;
    console.log(this.companyDetail.value);

    this.CustomerInfoService
      .createUser(this.companyDetail.value)
      .subscribe((res) => {
        console.log('companyDetail -> Api -> res', res);
      
      });
      // this.router.navigate(['/view']);

  }
  view(){
    this.router.navigate(['/view']);
  }

  removeSafetyModule(i: any) {
    const item = <FormArray>this.companyDetail.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);

    }
  }
  onReset() {
    this.submitBtn = true;
    this.companyDetail.reset();
  }
  branches: Array<any> = [
    { name: 'Marketing', value: 'marketing' },
    { name: 'IT', value: 'IT' },
    { name: 'BPO', value: 'BPO' },
    { name: 'Sales', value: 'sales' },
    { name: 'Electronics', value: 'electronics' },


  ]
  onbranches(e: any) {
    const checkArray: FormArray = this.companyDetail.get(
      'branches'
    ) as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      checkArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
        }
      });
    }
  }


}

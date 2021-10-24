import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerInfoService } from 'src/service/customer-info.service';
import { CustomerRegistrationFormComponent } from '../customer-registration-form.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.css']
})
export class ViewFormComponent implements OnInit {
  customerData:any;
  viewData:any;
  details:any;
  constructor(private service: CustomerInfoService,    public router: Router)  { 
 
  
  this.service.getUserById(this.customerData).subscribe((resp) => {
  this.details = resp;
  
})
  }
  ngOnInit(): void {
  }

}

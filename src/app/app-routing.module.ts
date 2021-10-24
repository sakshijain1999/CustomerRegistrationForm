import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerRegistrationFormComponent } from './customer-registration-form/customer-registration-form.component';
import { ViewFormComponent } from './customer-registration-form/view-form/view-form.component';

const routes: Routes = [
  { path: '', component: CustomerRegistrationFormComponent },
  {path: 'view',component:ViewFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

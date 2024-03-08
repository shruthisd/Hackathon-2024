import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IdentificationFormComponent } from '../identification-form/identification-form.component';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/registration', pathMatch: 'full' },
    { path: 'registration', component: RegistrationFormComponent},
    { path: 'identification', component: IdentificationFormComponent },

  ];

  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
  })
  export class AppRoutingModule{}
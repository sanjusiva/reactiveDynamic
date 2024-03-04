import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MultiFieldComponent } from './multi-field/multi-field.component';
import { OneFieldComponent } from './one-field/one-field.component';

const routes: Routes = [
  {path: '',pathMatch: 'full',redirectTo: 'form'},
  {path:'form',component:FormComponent},
  {path:'one',component:OneFieldComponent},
  {path:'many',component:MultiFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoriesComponent } from './factories/factories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManufacturersComponent } from './manufacturers/manufacturers.component';

const routes: Routes = [
  {path:"", component:LoginComponent, pathMatch:"full"},
  {path:"home", component:HomeComponent, pathMatch:"full"},
  {path:"manufacturers", component:ManufacturersComponent, pathMatch:"full"},
  {path:"factories", component:FactoriesComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

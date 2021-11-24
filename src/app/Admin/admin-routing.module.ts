import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:[
  /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
  { path :'' , component: HomePageComponent },
  { path :'admindashboard' , component: AdminDashboardComponent },
  {path :'**', component: HomePageComponent}
  
  
  ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
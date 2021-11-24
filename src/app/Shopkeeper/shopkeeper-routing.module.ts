import { ShopkeeperDashboardComponent } from './shopkeeper-dashboard/shopkeeper-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  {path:'',component:ShopkeeperDashboardComponent,children:[
  /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
  { path :'' , component: HomePageComponent },
  { path :'dashboard' , component:  ShopkeeperDashboardComponent},
  {path :'**', component: HomePageComponent}
  
  
  ]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ShopkeeperRoutingModule { }
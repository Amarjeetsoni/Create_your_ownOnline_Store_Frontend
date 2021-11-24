import { ControlPageComponent } from './control-page/control-page.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  { path: 'shopkeeper', loadChildren:()=>import('./shopkeeper/shopkeeper.module').then(m=>m.ShopkeeperModule)},
  { path: 'user', loadChildren:()=>import('./User/user.module').then(m=>m.UserModule)},
  { path: '**', component: ControlPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

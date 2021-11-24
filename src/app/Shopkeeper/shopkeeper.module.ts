import { ShopkeeperDashboardComponent } from './shopkeeper-dashboard/shopkeeper-dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ShopkeeperRoutingModule } from './shopkeeper-routing.module';

@NgModule({
    declarations: [ShopkeeperDashboardComponent,HomePageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ShopkeeperRoutingModule
      ]
      , providers:[
        DatePipe,
      ]
    })
export class ShopkeeperModule { }
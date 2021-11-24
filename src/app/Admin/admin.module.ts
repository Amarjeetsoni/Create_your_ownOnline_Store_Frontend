import { HomePageComponent } from './home-page/home-page.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
    declarations: [AdminDashboardComponent,HomePageComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    
      ]
      , providers:[
        DatePipe,
      ]
    })
export class AdminModule { }
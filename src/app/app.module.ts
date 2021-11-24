import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './Admin/home-page/home-page.component';
import { ControlPageComponent } from './control-page/control-page.component';
import { ShopkeeperDashboardComponent } from './Shopkeeper/shopkeeper-dashboard/shopkeeper-dashboard.component';
import { UserDashboardComponent } from './User/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

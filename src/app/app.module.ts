import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegComponent } from './components/reg/reg.component';
import {HttpClientModule} from '@angular/common/http';
import { UserviewComponent } from './components/userview/userview.component';


const appRoutes: Routes = [
  { path: 'reg', component: RegComponent},
  { path: 'log', component: LoginComponent},
  { path: 'user', component: UserviewComponent}
];

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegComponent,
  UserviewComponent,
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MaterialAppModule,
  AppRoutingModule,
  FormsModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

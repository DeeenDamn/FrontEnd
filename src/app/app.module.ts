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
import { OrganizationComponent } from './organization/organization.component';


const appRoutes: Routes = [
  { path: 'reg', component: RegComponent},
  { path: 'log', component: LoginComponent},
  { path: 'user', component: UserviewComponent},
  { path: 'user/org', component: OrganizationComponent}
];

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  RegComponent,
  UserviewComponent,
  OrganizationComponent,
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

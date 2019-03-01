import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatNativeDateModule, MatInputModule, MatMenuModule, MatSidenavModule, MatListModule,
  MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
imports: [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatMenuModule
],
exports: [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatMenuModule
]
})
export class MaterialAppModule { }

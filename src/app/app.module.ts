import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CarPreviewComponent } from './core/car-preview/car-preview.component';
import { StepNavigatorComponent } from './core/step-navigator/step-navigator.component';
import { StepOneComponent } from './core/step-one/step-one.component';
import { StepTwoComponent } from './core/step-two/step-two.component';
import { StepThreeComponent } from './core/step-three/step-three.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPreviewComponent,
    StepNavigatorComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

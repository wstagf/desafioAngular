import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DomainModule } from './core/domain/domain.module';
import { SharedModule } from './presentation/view/shared/shared.module';  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DomainModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

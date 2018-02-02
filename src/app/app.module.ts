import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';


import { AppComponent } from './app.component';
import { IntlTelInputComponent } from './components/intl-tel-input/intl-tel-input.component';


@NgModule({
  declarations: [
    AppComponent,
    IntlTelInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

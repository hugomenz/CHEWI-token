import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import {MatListModule} from '@angular/material/list';

import { GetChewisComponent } from './pages/get-chewis/get-chewis.component';
import { WhitepaperComponent } from './pages/whitepaper/whitepaper.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    GetChewisComponent,
    WhitepaperComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatListModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatSnackBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

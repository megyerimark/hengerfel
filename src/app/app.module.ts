 /*
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-02-06
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/ 



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { CaclComponent } from './cacl/cacl.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GitComponent,
    CaclComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GitComponent } from './git/git.component';
import { CaclComponent } from './cacl/cacl.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GitComponent,
    CaclComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

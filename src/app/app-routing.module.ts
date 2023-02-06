 /*
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-02-06
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/ 



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CaclComponent } from './cacl/cacl.component';
import { GitComponent } from './git/git.component';

const routes: Routes = [
  {path: "git",component:GitComponent},
  {path: "about",component:AboutComponent},
  {path: "cacl",component:CaclComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

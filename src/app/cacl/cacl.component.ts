
 /*
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-02-06
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/ 

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cacl',
  templateUrl: './cacl.component.html',
  styleUrls: ['./cacl.component.scss']
})
export class CaclComponent implements OnInit {

  sugar = new FormControl("");
  hossz = new FormControl("");
  area = new FormControl("");
  perimeter = new FormControl("");
  perimeterVisible = false;
  areaVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event:any){
    console.log(event.key)
    if(event.key == "Enter"){
   this.onEnterHendler();
    }
  }
  onEnterHendler() {
    this.calc();
 
  };

  calc(){
    let sugar = Number(this.sugar.value);
    let hossz = Number(this.hossz.value);
    let area = this.calcArea(sugar,hossz);
    this.perimeter.setValue(String(this.perimeter));
    this.area.setValue(String(area));
    this.perimeterVisible = true;
    this.areaVisible= true
  }

  calcArea(sugar:number, hossz:number){
    let area = 2*Math.PI*sugar*(sugar*hossz);
    return area;
  }
  onClickCalcButton(){
    this.calc();
    

  }

}

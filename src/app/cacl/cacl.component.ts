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

  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(event:any){
    console.log(event.key)
    if(event.key == "Enter"){
      alert("megnyomtad az embert")
    }
  }

}

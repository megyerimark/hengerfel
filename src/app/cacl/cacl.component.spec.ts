 /*
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-02-06
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/ 

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaclComponent } from './cacl.component';

describe('CaclComponent', () => {
  let component: CaclComponent;
  let fixture: ComponentFixture<CaclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

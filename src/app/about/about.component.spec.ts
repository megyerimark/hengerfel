
 /*
* Author: Megyeri Márk Máté
* Copyright: 2023, Megyeri Márk Máté
* Group: Szoft II/N
* Date: 2023-02-06
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/ 


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

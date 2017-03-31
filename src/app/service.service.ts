import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

  calBMI(h,w){
    let bmi:number=0.0;
    bmi=w/Math.pow((h/100),2);
    return bmi
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from "app/service.service";
import { DataService } from "app/data.service";

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {

  constructor(private _service: ServiceService, private _data: DataService) { }

  ngOnInit() {
    // alert(this._service.calBMI(180,60));
    
    // this._data.getData().subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log("ERROR");
    //   },
    //   () => {
    //     console.log("FINISH");
    //   }
    // )
    this._data.postData().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log("ERROR");
      },
      () => {
        console.log("FINISH");
      }
    )
  }
}

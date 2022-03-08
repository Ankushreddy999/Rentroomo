import { Component, OnInit } from '@angular/core';
import * as AOS from "aos"
@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.css']
})
export class WhoweareComponent implements OnInit {
 constructor() { }

  ngOnInit(): void {
    AOS.init({
      disable: 'mobile'
    });
  }

}

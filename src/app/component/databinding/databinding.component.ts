import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: 'databinding.component.html'
})

export class DataBindingComponent implements OnInit {
  private fname: string;
  private mname: string;
  private lname: string;


  constructor() {
    console.log('data binding examples');
   }

  ngOnInit() {

  }
  
}

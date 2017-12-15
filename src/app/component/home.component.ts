
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html'
})

export class HomeComponent implements OnInit {
    private title:string = "Welcome to Angular2 Secured App";

    constructor() { }

    ngOnInit() { }
}
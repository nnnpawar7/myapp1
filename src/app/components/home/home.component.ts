import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    template: `<h1>Home Page</h1>
    <button class="btn btn-info" (click)="onReClick()">Click</button>
    `
})

export class HomeComponent {
    constructor(private _router: Router) {
     }
     onReClick() {
         this._router.navigate(['/list']);
        }

}

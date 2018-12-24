import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-welcome',
  templateUrl: './welcome.component.html',
})
export class LaWelcomeComponent implements OnInit {
  constructor() { }

  // tslint:disable-next-line:prefer-function-over-method
  ngOnInit() {
    console.log('LaWelcomeComponent');
  }
}

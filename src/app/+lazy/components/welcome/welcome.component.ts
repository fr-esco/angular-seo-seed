import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-welcome',
  templateUrl: './welcome.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaWelcomeComponent implements OnInit {
  constructor() { }

  // tslint:disable-next-line:prefer-function-over-method
  ngOnInit() {
    console.log('LaWelcomeComponent');
  }
}

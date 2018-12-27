import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-la-credits',
  templateUrl: './credits.component.html',
  styles: [`
    mat-card-footer {
      text-align: center;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaCreditsComponent {
  constructor() { }
}

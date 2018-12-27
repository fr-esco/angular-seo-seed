import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  heroes$ = this.heroService.getHeroes$();

  constructor(private readonly heroService: HeroService) { }

  // tslint:disable-next-line:prefer-function-over-method
  ngOnInit() {
  }
}

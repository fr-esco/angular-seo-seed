import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-la-product-name',
  template: `<span class="la-strong">Lazy</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaProductNameComponent {
}

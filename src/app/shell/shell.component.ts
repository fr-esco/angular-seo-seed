import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatButtonToggleChange, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// tslint:disable-next-line:max-classes-per-file
export class MenuNode {
  children?: MenuNode[];
  filename = '';
  routerLink = '/';
}

// tslint:disable-next-line:max-classes-per-file
export class MenuFlatNode {
  constructor(
    public expandable: boolean,
    public filename: string,
    public routerLink: string,
    public level: number
  ) { }
}

// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  treeControl: FlatTreeControl<MenuFlatNode>;
  treeFlattener: MatTreeFlattener<MenuNode, MenuFlatNode>;
  dataSource: MatTreeFlatDataSource<MenuNode, MenuFlatNode>;
  showLa = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @HostBinding('class.app-dark-theme') darkMode = false;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly overlayContainer: OverlayContainer
  ) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<MenuFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.dataSource.data = [
      {
        filename: 'Dashboard',
        routerLink: '/dashboard',
      },
      {
        filename: 'Lazy',
        routerLink: '/lazy',
        children: [
          { filename: 'Credits', routerLink: '/lazy/credits' },
        ],
      },
    ];
  }

  changeTheme($event: MatButtonToggleChange) {
    if ($event.source.checked) {
      this.overlayContainer.getContainerElement().classList
        .add('app-dark-theme');
    } else {
      this.overlayContainer.getContainerElement().classList
        .remove('app-dark-theme');
    }
    this.darkMode = $event.source.checked;
  }

  transformer = (node: MenuNode, level: number) => {
    return new MenuFlatNode(
      !(!node.children || !node.children.length),
      node.filename,
      node.routerLink,
      level
    );
  }

  private readonly _getLevel = (node: MenuFlatNode) => node.level;

  private readonly _isExpandable = (node: MenuFlatNode) => node.expandable;

  private readonly _getChildren = (node: MenuNode): Observable<MenuNode[]> => of(node.children || []);

  hasChild = (_: number, _nodeData: MenuFlatNode) => _nodeData.expandable;

  toggleLa() {
    this.showLa = !this.showLa;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from 'src/app/models';

@Component({
  selector: 'coeus-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() menus: Menu[] = [];
  @Input() currentMenu = 'home';
  @Output() menuSelect: EventEmitter<any> = new EventEmitter<any>();

  select(menu: Menu, index: number) {
    this.menuSelect.emit({ menu, index });
  }
}

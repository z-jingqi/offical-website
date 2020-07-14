import { Component, OnInit } from '@angular/core';
import { Menu } from './models';
import { MENUS } from './menu-data';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators'

@Component({
  selector: 'coeus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('transSection', [
  //     transition(':increment', [
  //       style({ background: '#ccc' }),
  //       animate('0.7s', style({ background: 'skyblue'}))
  //     ],
  //       {
  //         params: { startHeight: 0, endHeight: '-100%' }
  //       }
  //     ),
  //     transition(':decrement', [
  //       style({ transform: 'translateY({{endHeight}})' }),
  //       animate('0.7s', style({ transform: 'translateY({{startHeight}})' }))
  //     ],
  //       {
  //         params: { startHeight: 0, endHeight: '-100%' }
  //       })
  //   ])
  // ]
})
export class AppComponent implements OnInit {

  menus: Menu[] = MENUS;
  sectionIndex = 0;
  currentHash = 'home';
  menuIndex = [
    {
      index: 0,
      menu: 'home'
    },
    {
      index: 1,
      menu: 'projects'
    },
    {
      index: 2,
      menu: 'contact'
    },
    {
      index: 3,
      menu: 'about'
    }
  ];
  get currentClass() {
    return `index-${this.sectionIndex}`;
  }

  ngOnInit() {
    this.getInitHash();
    this.onScroll();
    this.onHashChange();
  }

  menuSelect(index: number) {
    this.sectionIndex = index
  }

  onScroll() {
    const wheelEvent = fromEvent(document.body, 'wheel').pipe(throttleTime(1300));
    wheelEvent.subscribe((event: WheelEvent) => {
      if (event.deltaY < 0) {
        if (this.sectionIndex > 0) {
          this.sectionIndex--;
        }
      } else if (event.deltaY > 0) {
        if (this.sectionIndex < 3) {
          this.sectionIndex++;
        }
      }
      this.setHash(this.sectionIndex);
    });
  }

  onHashChange() {
    const hashEvent = fromEvent(window, 'hashchange');
    hashEvent.subscribe((event: HashChangeEvent) => {
      const urlHash = event.newURL.split('#')[1];
      this.currentHash = urlHash;
    });
  }

  getInitHash() {
    this.currentHash = location.hash.replace('#', '');
    if (this.currentHash) {
      const menuI = this.menuIndex.find(mi => mi.menu == this.currentHash);
      this.sectionIndex = menuI ? menuI.index : 0;
    }
  }

  setHash(index: number) {
    const menuI = this.menuIndex.find(mi => mi.index == index);
    if (menuI) {
      location.hash = `#${menuI.menu}`;
    }
  }

}

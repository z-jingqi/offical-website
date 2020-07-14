import { Component, OnInit } from '@angular/core';
import { Menu } from './models';
import { MENUS } from './menu/menu-data';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators'

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
  menuIndex = {
    home: 0,
    projects: 1,
    contact: 2,
    about: 3
  }

  get currentClass() {
    return `index-${this.sectionIndex}`;
  }

  ngOnInit() {
    this.getInitHash();
    this.onScroll();
    this.onHashChange();
  }

  menuSelect(params: { menu: Menu, index: number }) {
    this.sectionIndex = params.index
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
      const index = this.menuIndex[this.currentHash];
      this.sectionIndex = index ? index : 0;
    }
  }

}

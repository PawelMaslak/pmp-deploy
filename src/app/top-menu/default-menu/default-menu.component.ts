import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-menu',
  templateUrl: './default-menu.component.html',
  styleUrls: ['./default-menu.component.scss']
})
export class DefaultMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  previousWindowPosition = 0;

  hidden = false;

  onWindowScroll() {
    var currentPageOffset = window.pageYOffset;
    this.previousWindowPosition > currentPageOffset ? this.hidden = false : this.hidden = true;
    this.previousWindowPosition = currentPageOffset;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {

  constructor() { }

  toggleMenu() {
    let hamburger = document.getElementById("hamburger-1");
    let links = document.getElementById("links");
    hamburger?.classList.toggle("is-active");

    if (links!.style.opacity === "1") {
      links!.style.opacity = "0";
      links!.style.zIndex = "-1"
    }
    else {
      links!.style.opacity = "1";
      links!.style.zIndex = "1"
    }
  }

  clickMenu() {
    let links = document.getElementById("links");
    let hamburger = document.getElementById("hamburger-1");
    links!.style.opacity = "0";
    links!.style.zIndex = "-1"
    hamburger?.classList.toggle("is-active");
  }
}

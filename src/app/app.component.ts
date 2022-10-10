import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.load();
  }

  load() {
    const loader = document.querySelector('.loader') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;

    if (!environment.animations) {
      loader.style.display = 'none';
      main.style.display = 'grid';
      main.style.opacity = '1';
    }
    else {
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.display = 'none';

        main.style.display = 'grid';
        setTimeout(() => {
          main.style.opacity = '1';
        }, 100);
      }, 4000);
    }
  }

  checkMobileMenu(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;

    let links = document.getElementById('links');
    let hamburger = document.getElementById('hamburger-1');

    if (links?.contains(target) || hamburger?.contains(target)) return;

    if (!hamburger?.classList.contains("is-active")) return;
    
    hamburger.classList.remove("is-active");
    links!.style.opacity = "0";
    links!.style.zIndex = "-1"
  }
}

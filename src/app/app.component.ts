import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testingAnimeJS';
  alert:any;


  ngOnInit() {
    this.animationLetter();
  }

  animationLetter(){
    anime({
      targets: '.letter',
      opacity: 1,
      translateY: 50,
      rotate: {
        value: 360,
        duration: 2000,
        easing: 'easeInExpo'
      },
      delay: anime.stagger(100, {start: 1000}),
      translateX: [-10, 30]
    });
  }

}


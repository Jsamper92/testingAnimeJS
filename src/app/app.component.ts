import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testingAnimeJS';
  progress: any = 0;
  animation;
  alert;
  createAlert() {
    this.alert = anime.timeline({
      targets: '.alert',
      translateY: 0,
      colors: 'rgb(227, 255, 224)',
      direction: 'alternate',
      duration:2000,
      autoplay: false,
      easing: 'easeInOutSine',
    }).add({ targets: '.alert', background: '#78be20' }, 0);
  }

  showAlert(){
    this.alert.play();
  }

  createAnimationBasic(): void {
    this.animation = anime({
      targets: '.box',
      translateX: 250,
      duration: 3000,
      direction: 'alternate',
      rotate: 250,
      loop: true,
      bagroundColor: '#FFF',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutSine',
      autoplay: false
    });
  }

  start(): void {
    this.animation.play();
  }

  pause(): void {
    this.animation.pause();
  }

  reverse(): void {
    this.animation.reverse();
  }



  ngOnInit() {
    this.createAnimationBasic();
    this.createAlert();
  }
}


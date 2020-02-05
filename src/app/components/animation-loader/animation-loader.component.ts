import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-animation-loader',
  templateUrl: './animation-loader.component.html',
  styleUrls: ['./animation-loader.component.css']
})
export class AnimationLoaderComponent implements OnInit {

    /**
   * @param loader - Variable donde alojamos la animacion
   *
   */

  loader:any;

  constructor() { }

  ngOnInit() {
    this.animationLoader();
  }

  animationLoader(){
    this.loader = anime.timeline({
      duration: 1000,
      easing: 'easeInOutSine',
      loop: true
    });

    this.loader.add({
      targets: '.one',
      keyframes: [
        {translateY: -50, backgroundColor: 'rgb(255, 0, 0)' },
        {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
      ]
    }).add({
      targets: '.two',
      keyframes: [
        {translateY: -50, backgroundColor: 'rgb(0, 255, 0)' },
        {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
      ]
    }, '-=900').add({
      targets: '.three',
      keyframes: [
        {translateY: -50, backgroundColor: 'rgb(0, 0, 255)' },
        {translateY: 0, backgroundColor: 'rgb(128, 128, 128)'}
      ]
    }, '-=800');
  }

}

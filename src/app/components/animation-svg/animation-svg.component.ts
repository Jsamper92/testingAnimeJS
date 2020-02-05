import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
@Component({
  selector: 'app-animation-svg',
  templateUrl: './animation-svg.component.html',
  styleUrls: ['./animation-svg.component.css']
})
export class AnimationSVGComponent implements OnInit {
  svg:any;

  constructor() { }

  ngOnInit() {
    this.animationSVG();
    this.svg.play();
  }

  animationSVG(): void {
    this.svg = anime.timeline({
      targets: '.icon-line',
      easing: 'easeInOutSine',
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 2400,
      begin() {
        document.querySelector('path').setAttribute("stroke", "black");
        document.querySelector('path').setAttribute("stroke-width", "3");
        document.querySelector('path').setAttribute("fill", "#E23237");
      },
      loop: false,
      autoplay: false
    })
      .add({
        targets: '.icon-background',
        opacity: [
          { value: 0, easing: 'easeOutSine', duration: 1000 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ]
      }, 0)
      .add({
        targets: '.icon-letter',
        opacity: [
          { value: 0,  duration: 1400 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ], scale: [
          { value: 0, easing: 'easeOutSine', duration: 1000, delay: 1000 },
          { value: 1, easing: 'cubicBezier(.17,.67,.15,1.42)' }
        ]
      }, 1000)
  }

}

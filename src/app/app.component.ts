import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'testingAnimeJS';
  updates = 0;
  loopbeganNumber = 0;
  animation: any;
  alert: any;
  svg: any;
  loader:any;

  @ViewChild('input') input: ElementRef;
  @ViewChild('loopbegan') loopbegan: ElementRef;
  @ViewChild('loopcompleted') loopcompleted: ElementRef;

  ngOnInit() {
    this.createAnimationBasic();
    this.createAlert();
    this.animationSVG();
    this.animationLoader();
    this.svg.play();
  }

  createAlert(): void {
    this.alert = anime.timeline({
      targets: '.alert',
      translateY: 0,
      colors: 'rgb(227, 255, 224)',
      direction: 'alternate',
      duration: 2000,
      autoplay: false,
      easing: 'easeInOutSine',
    }).add({ targets: '.alert', background: '#78be20' }, 0);
  }

  showAlert(): void {

    this.alert.play();
  }

  createAnimationBasic(): void {
    const objeto = this.input;
    const loopbegan = this.loopbegan;
    this.animation = anime({
      targets: '.box',
      translateX: 250,
      duration: 3000,
      rotate: 250,
      loop: true,
      direction: 'alternate',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutSine',
      autoplay: false,
      update(anim) {
        objeto.nativeElement.value = 'progress : ' + Math.round(anim.progress) + '%';
      },
      loopBegin(anim) {
        const vueltas = anim.begin++;
        loopbegan.nativeElement.value = 'loop : ' + vueltas;
      }
    });

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
          { value: 0, easing: 'easeOutSine', duration: 2000 },
          { value: 1, easing: 'easeInOutQuad', duration: 1200 }
        ], scale: [
          { value: 0, easing: 'easeOutSine', duration: 1000, delay: 1000 },
          { value: 1, easing: 'easeInOutQuad' }
        ]
      }, 1000)
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



  start(): void {
    this.animation.play();
    this.svg.play();
  }

  pause(): void {
    this.animation.pause();
  }

  reverse(): void {
    this.animation.reverse();
  }

  reset(): void {
    this.animation.reset();
  }


}


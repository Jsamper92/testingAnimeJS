import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import anime from 'animejs';
@Component({
  selector: 'app-animation-basic',
  templateUrl: './animation-basic.component.html',
  styleUrls: ['./animation-basic.component.css']
})
export class AnimationBasicComponent implements OnInit {


  /**
 * @param animation - Variable donde alojamos la animacion
 */

  animation:any;

  /**
 * @param input - Variable donde implementamos lógica del progreso en porcentaje
 */

  @ViewChild('input') input: ElementRef;

 /**
 * @param loopbegan - Variable que controla el número de vueltas del loop
 */

  @ViewChild('loopbegan') loopbegan: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createAnimationBasic();
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

  start() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  reverse() {
    this.animation.reverse();
  }

  reset() {
    this.animation.reset();
  }

}

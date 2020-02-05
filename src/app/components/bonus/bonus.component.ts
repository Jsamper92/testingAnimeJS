import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.scss']
})
export class BonusComponent implements OnInit {

  /**
   * @param alert - variable donde alojamos la animación
   */

  alert:any;

  constructor() { }

  ngOnInit() {
    this.createAlert();
  }


  createAlert(): void {
    this.alert = anime.timeline({
      targets: '.alert',
      direction: 'alternate',
      duration: 2000,
      translateY:300,
      autoplay: false,
      easing: 'easeInOutSine'
    })
    .add({ targets: '.alert', background: '#78be20', opacity:1 }, 0)
    .add({ targets: 'span', opacity:1 }, 0);
  }

  showAlert(): void {
    this.alert.play();
  }

}

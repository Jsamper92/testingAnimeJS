import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationSVGComponent } from './components/animation-svg/animation-svg.component';
import { AnimationLoaderComponent } from './components/animation-loader/animation-loader.component';
import { AnimationBasicComponent } from './components/animation-basic/animation-basic.component';
import { AppComponent } from './app.component';
import { BonusComponent } from './components/bonus/bonus.component';

const routes: Routes = [
  {
    path: 'animationSVG',
    component: AnimationSVGComponent
  },
  {
    path: 'animationLoader',
    component: AnimationLoaderComponent
  },
  {
    path: 'animationBasic',
    component: AnimationBasicComponent
  },
  {
    path: 'bonus',
    component: BonusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

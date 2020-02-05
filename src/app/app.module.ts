import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationBasicComponent } from './components/animation-basic/animation-basic.component';
import { AnimationLoaderComponent } from './components/animation-loader/animation-loader.component';
import { AnimationSVGComponent } from './components/animation-svg/animation-svg.component';
import { BonusComponent } from './components/bonus/bonus.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationBasicComponent,
    AnimationLoaderComponent,
    AnimationSVGComponent,
    BonusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

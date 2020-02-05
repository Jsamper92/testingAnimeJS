import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationSVGComponent } from './animation-svg.component';

describe('AnimationSVGComponent', () => {
  let component: AnimationSVGComponent;
  let fixture: ComponentFixture<AnimationSVGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationSVGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

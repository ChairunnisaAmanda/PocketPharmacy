import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searching = false;
  inputFired = false;
  @ViewChild('headerwrapper', { read: ElementRef }) headerwrapper: ElementRef;
  @ViewChild('condenseheader', { read: ElementRef }) condenseheader: ElementRef;
  @ViewChild('overlay') overlay: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  toggleSearch(){
    if (this.inputFired){
      return;
    }
    this.inputFired = true;
    const titleToolbar = this.condenseheader.nativeElement.children[0];
  
    // Fade out the status bar area
    const toolbarFade = this.animationCtrl.create('fade')
      .addElement(this.headerwrapper.nativeElement)
      .fromTo('opacity',1,0)
      .fromTo('height', '90px','36px')
      .afterStyles({'z-index':-1});

    // Fade out the condensed header
    const headerfade = this.animationCtrl.create('header')
      .addElement(titleToolbar)
      .fromTo('opacity',1,0)
      .fromTo('height', '48px','0px')
      .afterStyles({'z-index':-1});

    // chair all animation
    const wrapper= this.animationCtrl.create('wrapper')
      .addAnimation([toolbarFade,headerfade])
      .easing('ease-in')
      .duration(200);

    const overlayFade = this.animationCtrl.create('overlay')
      .addElement(this.overlay.nativeElement)
      .fromTo('opacity',0,1)
      .duration(200);

      if (this.searching){
        wrapper.direction('reverse').play();
        overlayFade.direction('reverse')
        .afterStyles({'z-index' :0}).play();
      } else {
        wrapper.play();
        overlayFade
        .beforeStyles({'z-index' :2}).play();
      }

    

    this.inputFired = false;
    this.searching = !this.searching;
  }

}

import { Component, ViewChild} from '@angular/core';
import { NavController, App, Slides} from 'ionic-angular';
import { FacilitiesPage } from '../facilities/facilities';
import { ProgramsPage } from '../programs/programs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.startAutoplay();
  }
  slidess = [
    {
      image: "assets/imgs/img4.png",
    },
   {
      image: "assets/imgs/slider2.jpg",
    },
    {
      image: "assets/imgs/slider3.jpg",
    },
    {
      image: "assets/imgs/slider4.jpg",
    },
    {
      image: "assets/imgs/slider5.jpg",
    },
    {
      image: "assets/imgs/slider6.jpg",
    },
    {
      image: "assets/imgs/slider7.jpg",
    },
    {
      image: "assets/imgs/slider8.jpg",
    },
  ];
  constructor(public navCtrl: NavController,public app: App) {
   
    
  }
  
  facilities(){
    this.app.getRootNav().push(FacilitiesPage);
  }
  programs(){
    this.app.getRootNav().push(ProgramsPage);
  }
}

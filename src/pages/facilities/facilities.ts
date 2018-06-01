import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
  }

  datas = [
    {
      title: "VILLA",
      description: 
      "For less than the cost of staying at a good hotel "+
      "in Bali you can now enjoy the luxury of a beautiful private villa with group bedrooms and tropical bathrooms to dream about, spacious living and dining areas and outdoor terraces, a lush tropical garden with swimming pool, and well-trained butler to take care of everything around the clock.",
      image: "assets/imgs/img2.jpg",
    },
    {
      title: "Meeting Room",
      description: 
      "While enjoying the villas with a lush tropical garden, you can make appointment meeting with client, team or colleague.",
      image: "assets/imgs/img3.jpg",
    },
    {
    title: "Pool",
    description:
    "Share your great moments at pool area, fit for 150 person. Enjoy the atmosphere.",
    image: "assets/imgs/img4.jpg",
  }];

}

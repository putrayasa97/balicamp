import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }
  datas = [
    {
      title: "OUTBOUND TRAINING",
      description: 
      "Outbound training is one of the modern learning methods which utilize natural advantages. the participants who are not only faced with the outbound intelligence challenges, but also the physical and mental. And this will continuously trained into an experience that equip him dalammenghadapi challenge is even more evident in competition in the social life of the community.",
      image: "assets/imgs/img5.jpg",
    },
    {
      title: "ADVENTURE TRIP",
      description: 
      "Outbound traning programs can also be designed for organizations, companies or schools that want to improve or build a sense of leadership and cooperation within the group of employees in a company or a school student or member of an organization.",
      image: "assets/imgs/img6.jpg",
    },
    {
    title: "VILLAGE ACTIVITY",
    description:
    "Based on the goal of developing human resources for every company and organization in order to achieve its vision and mission, Camp Bali Indonesia created several new programs based on experiential learning that very applicable and easy to digest so it can provide a pleasant atmosphere for a team.",
    image: "assets/imgs/img7.jpg",
  }];
}

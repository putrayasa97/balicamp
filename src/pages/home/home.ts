import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  slides = [
    {
      title: "Bali Camp Facilities",
      description: 
      "<li>VILLA</li>"+
      "<p>For less than the cost of staying at a good hotel "+
      "in Bali you can now enjoy the luxury of a beautiful private villa with group bedrooms and tropical bathrooms to dream about, spacious living and dining areas and outdoor terraces, a lush tropical garden with swimming pool, and well-trained butler to take care of everything around the clock.<p>"+
      "<li>Meeting Room</li>"+
      "<p>While enjoying the villas with a lush tropical garden, you can make appointment meeting with client, team or colleague.</p>"+
      "<li>Pool</li>"+
      "<p>Share your great moments at pool area, fit for 150 person. Enjoy the atmosphere</p>",
      image: "assets/imgs/img4.png",
    },
   {
      title: "Bali Camp Programs",
      description: "<li>Outbound Training</li>"+
      "<p>Outbound training is one of the modern learning methods which utilize natural advantages. the participants who are not only faced with the outbound intelligence challenges, but also the physical and mental. And this will continuously trained into an experience that equip him dalammenghadapi challenge is even more evident in competition in the social life of the community.<p>"+
      "<li>Adventure Trip</li>"+
      "<p>Outbound traning programs can also be designed for organizations, companies or schools that want to improve or build a sense of leadership and cooperation within the group of employees in a company or a school student or member of an organization.</p>"+
      "<li>Village Activity</li>"+
      "<p>Based on the goal of developing human resources for every company and organization in order to achieve its vision and mission, Camp Bali Indonesia created several new programs based on experiential learning that very applicable and easy to digest so it can provide a pleasant atmosphere for a team.</p>",
      image: "assets/imgs/img4.png",
    },
    {
      title: "Bali Camp Programs",
      description: "<li>Outbound Training</li>"+
      "<p>Outbound training is one of the modern learning methods which utilize natural advantages. the participants who are not only faced with the outbound intelligence challenges, but also the physical and mental. And this will continuously trained into an experience that equip him dalammenghadapi challenge is even more evident in competition in the social life of the community.<p>"+
      "<li>Adventure Trip</li>"+
      "<p>Outbound traning programs can also be designed for organizations, companies or schools that want to improve or build a sense of leadership and cooperation within the group of employees in a company or a school student or member of an organization.</p>"+
      "<li>Village Activity</li>"+
      "<p>Based on the goal of developing human resources for every company and organization in order to achieve its vision and mission, Camp Bali Indonesia created several new programs based on experiential learning that very applicable and easy to digest so it can provide a pleasant atmosphere for a team.</p>",
      image: "assets/imgs/img4.png",
    }  
  ];
  constructor(public navCtrl: NavController) {
   
    
  }

}

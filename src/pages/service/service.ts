import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ServVillaPage } from '../serv-villa/serv-villa';
import { ServMeetingPage } from '../serv-meeting/serv-meeting';


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }
  servVilla(){
    this.app.getRootNav().push(ServVillaPage);
  }
  servMeeting(){
    this.app.getRootNav().push(ServMeetingPage);
  }
}

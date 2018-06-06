import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { VillaPage } from '../villa/villa';
import { MeetingRoomPage } from '../meeting-room/meeting-room';
import { PoolPage } from '../pool/pool';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
  villa(){
    this.app.getRootNav().push(VillaPage);
  }
  meeting(){
    this.app.getRootNav().push(MeetingRoomPage);
  }
  pool(){
    this.app.getRootNav().push(PoolPage);
  }
}

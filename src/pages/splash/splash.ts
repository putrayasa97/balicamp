import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App, LoadingController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public splashScreen: SplashScreen,public viewCtrl: ViewController,public app: App, public loadingCtrl:LoadingController) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }*/
  ionViewDidEnter() {
 
    this.splashScreen.hide();
    
    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);
    setTimeout(() => {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
      this.app.getRootNav().push(TabsPage);
    }, 4000);
    
 
  }
}

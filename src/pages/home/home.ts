import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: ''
    });
  
    loading.present();
  

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
    
  }

}

import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer ) {
  
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmorderPage');
   
  }
  send(form:string, message:string) {
        let email = {
          to: 'putu.yasa2@gmail.com',
          cc: form,
          subject: 'Bali Camp Support',
          body: "form: " + form +"<br>"+message,
          isHtml: true
        };
        this.emailComposer.open(email);
  }

}

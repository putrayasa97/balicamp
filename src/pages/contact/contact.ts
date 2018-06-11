import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App} from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  fullName:string="";
  emailAddress:string="";
  phone:string="";
  message :string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer, public alertCtrl: AlertController, public app:App) {
  
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmorderPage');
   
  }
  send() {
    if(this.fullName == "" || this.emailAddress =="" || this.phone =="" || this.message == ""){
      const alert = this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Form is still empty!',
        buttons: ['OK']
      });
      alert.present();
    }else{
        let email = {
          to: 'putu.yasa2@gmail.com',
          subject: "Bali Camp Support",
          body:

          "Full Name :"+this.fullName+"<br>"+
          "Form Email Address : " + this.emailAddress +"<br>"+
          "Phone : " + this.phone +"<br>"+
          "Message :"+this.message,
          isHtml: true
        };
        this.emailComposer.open(email);
        this.fullName ="";
        this.emailAddress="";
        this.phone="";
        this.message="";
      }
  }

}

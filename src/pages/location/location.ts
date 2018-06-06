
import { Component, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';


declare const google;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  start:any;
  end:any;
  map: any;
  marker:any;
  infowindow:any;
  location : any = { lat: -8.332520, lng: 115.186341 };

  labels: string = 'AIzaSyCXHy7CrpPzt5AwJpWFbFb86mRAgLwhRcQ';
  labelIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.startMap();
}
startMap() {
  let posMaceio = {lat:this.location.lat, lng:this.location.lng};
  this.map = new google.maps.Map(this.mapElement.nativeElement, {
    zoom: 9,
    center: posMaceio,
    mapTypeId: 'roadmap'
  });
  
 // google.maps.event.addListener(this.map, 'click', (event) => {
  //  this.addMarker(event.latLng, this.map);
  //});
  this.marker = new google.maps.Marker({
    position: posMaceio,
    map: this.map
  });
  this.infowindow = new google.maps.InfoWindow({
    content: "<center><img src='assets/imgs/img4.png' weight='60' height='60'><h6>Bali Camp</h6><p>Jl. Raya Pacung no. 32A,</br>Baturiti"+
    "Tabanan Bali 82191, Indonesia</p></center>"
  });
  this.infowindow.open(this.map,this.marker);
  }

  startNavigating(){
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;

    directionsDisplay.setMap(this.map);
    //directionsDisplay.setPanel(this.directionsPanel.nativeElement);

    directionsService.route({
        origin:this.start,
        destination:{lat:this.location.lat, lng:this.location.lng},
        travelMode: google.maps.TravelMode['DRIVING']
    }, (res, status) => {

        if(status == google.maps.DirectionsStatus.OK){
            directionsDisplay.setDirections(res);
        } else {
            console.warn(status);
        }

    });
    

}
clear(){
  this.startMap();
}
  /*addMarker(location, map) {
    let marker = new google.maps.Marker({
      position: location,
      label: this.labels[this.labelIndex++ % this.labels.length],
      map: map
    });
}*/

}

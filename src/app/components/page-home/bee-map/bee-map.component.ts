import { Component, OnInit } from "@angular/core";
import {MatSlideToggleChange} from '@angular/material';
//models

import {Location} from '../../../models/location';
import {BeeHives} from '../../../models/beeHives';
import {Zones} from '../../../models/zones';
import {Point} from '../../../models/point';
//const declaration
declare const google: any;

@Component({
  selector: "app-bee-map",
  templateUrl: "./bee-map.component.html",
  styleUrls: ["./bee-map.component.scss"]
})
export class BeeMapComponent implements OnInit {
  location:Location;
  //beeMarker: BeeMarker;
  beeIcon:Object;
  zones:Zones[];
  checked:boolean;
  map:any;
  zoneColor:string;

  constructor() {
    this.beeIcon = {
      url: '../../../../assets/icons/bee.svg',
      scaledSize: {
          width: 20,
          height: 20
      }
  }
  this.zones = [];
  this.checked = false;
  this.map = null;
  this.zoneColor = "red";
  
  }

  ngOnInit() {
    //this.zones.push(upperLeftPoint:{lat:35,lng:35},bottomRightPoint:{lat:30,lng:40},dateTimeEnd:null,dateTimeStart:null});
    this.zones.push({upperLeftPoint:{lat:31,lng:31},bottomRightPoint:{lat:29,lng:32},dateTimeEnd:null,dateTimeStart:null})
    this.location = {
        latitude: 30,
        longitude: 30,
        mapType: "satelite",
        zoom: 5,
        markers: [
            {
                coordinate:{lat:-28.68352,lng:-147.20785},
                name:"lmao",
                count:1
            },
            {
              coordinate:{lat:30,lng:30},
              name:"kosnica random",
              count:1
            }
        ]
    }
}
onMapReady(map) {
  this.map = map;
}
onChange(value: MatSlideToggleChange) {
  //const { checked } = value;
  this.checked = value.checked;
  
  console.log(this.checked);
}

addMarker(lat: number, lng: number) {
  //pitas ovde da li je u selektovanoj formi izabrana pcela ili parcela 
  //za sada pretpostavljam da je selektovana pcela 
  //opali post request kada se ovo zavrsi 
  //if form.pcele === true onda ovo
  
  
  
  if(!this.checked){
    // const options ={drawingControl:false}
    // const drawingManager = new google.maps.drawing.DrawingManager(options);
    // drawingManager.setMap(options);
    this.location.markers.push({
      coordinate:{lat:lat,lng:lng},
      name:"",
      count:1
  })
  //drawingManager.setMap(options);
  }
  if(this.checked){
    console.log(this.map);
    const options = {
      drawingControl: true,
      drawingControlOptions : {
        position : google.maps.ControlPosition.TOP_CENTER,
        drawingModes : [ google.maps.drawing.OverlayType.RECTANGLE ]
    },
    rectangleOptions : {
        // strokeColor : this.zoneColor,
        // strokeWeight : 3.5,
        fillColor : this.zoneColor,
        fillOpacity : 0.5,
        editable: true,
        draggable: true
    }, 
      drawingMode: google.maps.drawing.OverlayType.RECTANGLE
    };

    const drawingManager = new google.maps.drawing.DrawingManager(options);
    drawingManager.setMap(this.map);
    

  }
  else return;
  
  //else postavlja se parcela
  //parcela se postavlja na drag
}

}

import { Component, OnInit } from "@angular/core";
import {MatSlideToggleChange} from '@angular/material';
//models

import {Location} from '../../../models/location';
import {BeeHives} from '../../../models/beeHives';
import {Zones} from '../../../models/zones';
import {Point} from '../../../models/point';
//const declaration

import {BeemapService} from '../../../services/beemap.service';
declare const google: any;

@Component({
  selector: "app-bee-map",
  templateUrl: "./bee-map.component.html",
  styleUrls: ["./bee-map.component.scss"]
})
export class BeeMapComponent implements OnInit {
  location:Location;
  beeHives: BeeHives[];
  beeIcon:Object;
  zones:Zones[];
  checked:boolean;
  map:any;
  zoneColor:string;
  drawingManager:any;
  
  constructor(private beeMapService:BeemapService) {
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
  this.beeHives = [];
  }

  ngOnInit() {
    //this.zones.push({upperLeftPoint:{lat:31,lng:31},bottomRightPoint:{lat:29,lng:32},dateTimeEnd:null,dateTimeStart:null})
    this.location = {
        latitude: 30,
        longitude: 30,
        mapType: "satelite",
        zoom: 5,
        markers: this.beeHives
    }
    
}
onMapReady(map) {
  this.map = map;
  //this.populateMap();
  this.drawingManager = new google.maps.drawing.DrawingManager();
}
getAllBeeHives(){
  this.beeMapService.getAllBeeHives().subscribe(res=>{
    console.log(res);
    res.forEach(bee=>{
      this.beeHives.push({coordinate:{lat: bee.latitude, lng:bee.longitude},name: bee.name,count:bee.hive_count})
    })
    console.log(this.beeHives);
  })
}

addBeeHive(){
  let beeHive = {};
  const last = this.beeHives.length-1;
  beeHive = {point:`SRID=4326;POINT (${this.beeHives[last].coordinate.lat} ${this.beeHives[last].coordinate.lng})`,hive_count:this.beeHives[last].count,name:"omegalul"};
  this.beeMapService.addBeeHive(beeHive).subscribe(res=>console.log(res));
}
onChange(value: MatSlideToggleChange) {
  //const { checked } = value;
  this.checked = value.checked;
  this.getAllBeeHives();
  
  console.log(this.checked);
}

addMarker(lat: number, lng: number) {
  //pitas ovde da li je u selektovanoj formi izabrana pcela ili parcela 
  //za sada pretpostavljam da je selektovana pcela 
  //opali post request kada se ovo zavrsi 
  //if form.pcele === true onda ovo
  
  // console.log(this.drawingManager);
  // if(this.drawingManager.getMap()){
  //   this.drawingManager.setMap(null);
  //   console.log(this.drawingManager);
  // }
  if(!this.checked){
    this.location.markers.push({
      coordinate:{lat:lat,lng:lng},
      name:"",
      count:1
  })
  this.beeHives.push({
    coordinate:{lat:lat,lng:lng},
    name:"",
    count:1
})
  //drawingManager.setMap(options);
  console.log(this.beeHives);
  this.addBeeHive();
  }
  // if(this.checked){
  //   console.log(this.map);
  //   const options = {
  //     drawingControl: true,
  //     drawingControlOptions : {
  //       position : google.maps.ControlPosition.TOP_CENTER,
  //       drawingModes : [ google.maps.drawing.OverlayType.RECTANGLE ]
  //   },
  //   rectangleOptions : {
  //       // strokeColor : this.zoneColor,
  //       // strokeWeight : 3.5,
  //       fillColor : this.zoneColor,
  //       fillOpacity : 0.5,
  //       editable: true,
  //       draggable: true
  //   }, 
  //     drawingMode: google.maps.drawing.OverlayType.RECTANGLE
  //   };

  //   this.drawingManager = new google.maps.drawing.DrawingManager(options);
  //   this.drawingManager.setMap(this.map);
  // }
  
  // else return;
  
  //else postavlja se parcela
  //parcela se postavlja na drag
}

}

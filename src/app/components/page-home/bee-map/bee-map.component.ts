import { Component, OnInit } from "@angular/core";
import {MatSlideToggleChange} from '@angular/material';
//models

import {Location} from '../../../models/location';
import {BeeHives} from '../../../models/beeHives';
import {Zones} from '../../../models/zones';
import {Point} from '../../../models/point';
//const declaration

import {BeemapService} from '../../../services/beemap.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { BeeHiveActionsState } from 'src/app/models/beeHiveActionsState';
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
  mapBounds:any;
  zoneColor:string;
  drawingManager:any;
  updateBeeHiveLocation:boolean;

  $beehivesActionsStatus: Observable<BeeHiveActionsState>;
  $myPlot:Observable<any>;
  $myBeehive: Observable<any>;
  myPlot:any;
  myBeehive:any;
  beehivesActionsStatus: BeeHiveActionsState;

  constructor(private beeMapService:BeemapService, private $store: Store<State>) {
    this.beeIcon = {
      url: '../../../../assets/icons/bee.svg',
      scaledSize: {
          width: 20,
          height: 20
      }
  }
  this.$beehivesActionsStatus = this.$store.select(s => s.beeHiveActionState);
  this.$myBeehive = this.$store.select(s => s.selecetedBeehives);
  this.$myPlot = this.$store.select(s => s.selectedPlot);
  this.zones = [];
  this.checked = false;
  this.map = null;
  this.zoneColor = "red";
  this.beeHives = [];
  this.mapBounds = null;
  this.updateBeeHiveLocation = false;
  }

  ngOnInit() {
    //this.zones.push({upperLeftPoint:{lat:31,lng:31},bottomRightPoint:{lat:29,lng:32},dateTimeEnd:null,dateTimeStart:null})
    this.location = {
        latitude: 43,
        longitude: 21,
        mapType: "satelite",
        zoom: 7,
        markers: this.beeHives
    }
    this.$beehivesActionsStatus.subscribe(bas => {
      this.beehivesActionsStatus = bas;
      console.log(this.beehivesActionsStatus);
    })
    this.$myBeehive.subscribe(bas => {
      this.myBeehive = bas;
      console.log(this.myBeehive);
      if(bas!==null && bas !==undefined){
        {
          this.location.latitude = this.myBeehive.latitude;
          this.location.longitude = this.myBeehive.longitude;
          this.location.zoom = 10;
          //this.beeMapService.getAllBeeHives(this.map.getBounds());
        }
        
      }
      
    })
    this.$myPlot.subscribe(bas => {
      this.myPlot = bas;
      if(bas!==null && bas !==undefined){
        this.location.latitude = this.myPlot.upper_left_latitude;
          this.location.longitude = this.myPlot.upper_left_longitude;
          this.location.zoom = 10;    
          console.log("upao");
      }
      
    })
    
}
onMapReady(map) {
  this.map = map;
  let that = this;
  console.log(this.map);
  google.maps.event.addListener(this.map, 'dragend', function() {
    console.log(map.getBounds());
    that.mapBounds = map.getBounds();
    that.getAllBeeHives(map.getBounds());
    that.getAllDangerZones(map.getBounds());
    // that.beeMapService.getAllDangerZones(map.getBounds()).subscribe(res=>{
    //   console.log(res);
    // });
    
 });
  this.drawingManager = new google.maps.drawing.DrawingManager();
}
getAllBeeHives(box:any){
  this.beeMapService.getAllBeeHives(box).subscribe(res=>{
    let temp = [...res];
    this.beeHives = [];
    temp.forEach(bee=>{
      this.beeHives.push({pk:bee.pk,coordinate:{lat: bee.latitude, lng:bee.longitude},name: bee.name,count:bee.hive_count})
    })
    
    console.log(this.beeHives);
  })
}
getAllDangerZones(box:any){
  this.beeMapService.getAllDangerZones(box).subscribe(res=>{
    console.log(res);
    let temp = [...res];
    this.zones = [];
    temp.forEach(zone=>{
      this.zones.push({pk:zone.pk,upperLeftPoint:{lat:zone.upper_left_latitude,lng:zone.upper_left_longitude},bottomRightPoint:{lat:zone.bottom_right_latitude,lng:zone.bottom_right_longitude},dateTimeEnd:null,dateTimeStart:null})
    })
   console.log(this.zones);
    
  })

}

addBeeHive(lat:number,lng:number){
  let beeHive = {};
  const last = this.beeHives.length-1;
  beeHive = {point:`SRID=4326;POINT (${lng} ${lat})`,hive_count:1,name:"lale"};
  this.beeMapService.addBeeHive(beeHive).subscribe(res=>{ 
      this.beeHives.push({pk:res,coordinate:{lat:lat,lng:lng},name:"",count:1});
  });
}
markerDragEnd($event: any,bee:BeeHives){
    let beeToUpdate;
    this.beeHives[this.beeHives.findIndex(el=>el.pk === bee.pk)].coordinate.lat = $event.coords.lat;
    this.beeHives[this.beeHives.findIndex(el=>el.pk === bee.pk)].coordinate.lng = $event.coords.lng;
    this.beeMapService.updateBeeHive(this.beeHives[this.beeHives.findIndex(el=>el.pk === bee.pk)]).subscribe(res=>{
      console.log(res);
    })
}

onChange(value: MatSlideToggleChange) {
  this.checked = value.checked;
  console.log(this.checked);
}
markerClicked(bee:any){
  this.beeHives.splice(this.beeHives.indexOf(bee),1);
  this.beeMapService.deleteBeeHive(bee).subscribe(res=>{
    
  })
}
addMarker(lat: number, lng: number) {
  console.log(this.beeHives);
  let latt = lat;
  let lngg = lng;
  this.addBeeHive(latt,lngg);
}

}

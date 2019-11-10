import { Injectable } from '@angular/core';
import {Zones} from '../models/zones';
import {BeeHives} from '../models/beeHives';
import { baseURL, httpOptions } from "src/assets/config";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeemapService {
  port:string;
  hive:BeeHives;

  constructor(private http:HttpClient) {
    this.hive = null;
   }

  //  public getAllBeeHives(): Observable<any[]> {
  //   const url = `${baseURL}beehives/user/`;
  //   return this.http.get<any[]>(url, httpOptions);
  // }
  public getAllBeeHives(regionCoordinates:any): Observable<any[]>{
    const querryParams = `?ul_lat=${regionCoordinates.na.j}&ul_lon=${regionCoordinates.na.l}&br_lat=${regionCoordinates.ga.j}&br_lon=${regionCoordinates.ga.l}`;
    const url = `${baseURL}beehives${querryParams}`;
    return this.http.get<any[]>(url,httpOptions);
  }

  public addBeeHive(beeHive:any): Observable<any[]>{
    // this.hive.coordinate={lat:37,lng:37};
    // this.hive.count = 1;
    // this.hive.name= "omegalul";
    console.log(this.hive);
    const url = `${baseURL}beehives/`;
    //return this.http.post<any>(url,{point:"SRID=4326;POINT (21.8875343 43.3358099)",hive_count:1,name:"omegalul"},httpOptions);
    //beeHive
    return this.http.post<any>(url,beeHive,httpOptions);
  }

  public getAllDangerZones(regionCoordinates:any){
    const querryParams = `?ul_lat=${regionCoordinates.na.j}&ul_lon=${regionCoordinates.na.l}&br_lat=${regionCoordinates.ga.j}&br_lon=${regionCoordinates.ga.l}`
    const url = `${baseURL}plots/get_plots${querryParams}`;
    return this.http.get<any[]>(url,httpOptions);
  }
}

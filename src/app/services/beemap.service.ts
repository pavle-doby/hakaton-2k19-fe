import { Injectable } from '@angular/core';
import {Zones} from '../models/zones';
import {BeeHives} from '../models/beeHives';
import { baseURL, httpOptions } from "src/assets/config";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { share } from 'rxjs/operators';

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
    const querryParams = `?ul_lat=${regionCoordinates.na.l}&ul_lon=${regionCoordinates.ga.j}&br_lat=${regionCoordinates.na.j}&br_lon=${regionCoordinates.ga.l}`;
    const url = `${baseURL}beehives${querryParams}`;
    return this.http.get<any[]>(url,httpOptions).pipe(share());
  }
  
  public getAllBeeHivesNoRegion(): Observable<any[]>{
    const url = `${baseURL}beehives`;
    return this.http.get<any[]>(url,httpOptions);
  }

  public addBeeHive(beeHive:any): Observable<number>{
    console.log(this.hive);
    const url = `${baseURL}beehives/`;
    return this.http.post<any>(url,beeHive,httpOptions);
  }
  public updateBeeHive(beeHive:any):Observable<any[]>{
    const url = `${baseURL}beehives/${beeHive.pk}`;
    return this.http.patch<any[]>(url,httpOptions);
  }
  public deleteBeeHive(beeHive:any):Observable<any[]>{
    const url = `${baseURL}beehives/${beeHive.pk}`;
    return this.http.delete<any[]>(url,httpOptions);
  }

  public getAllDangerZones(regionCoordinates:any){
    const querryParams = `?ul_lat=${regionCoordinates.na.l}&ul_lon=${regionCoordinates.ga.j}&br_lat=${regionCoordinates.na.j}&br_lon=${regionCoordinates.ga.l}`;
    const url = `${baseURL}plots/get_plots${querryParams}`;
    return this.http.get<any[]>(url,httpOptions);
  }
}

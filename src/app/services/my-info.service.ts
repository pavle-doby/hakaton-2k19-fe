import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { baseURL, httpOptions } from "src/assets/config";

@Injectable({
  providedIn: "root"
})
export class MyInfoService {
  constructor(private http: HttpClient) {}

  public getAllMyPlots(): Observable<any[]> {
    const url = `${baseURL}user_plots/`;
    // return this.http.get<any[]>(url, httpOptions);
    return of([
      { name: "plot1" },
      { name: "plot2" },
      { name: "plot3" },
      { name: "plot4" },
      { name: "plot5" }
    ]);
  }
  public getAllMyBeehives(): Observable<any[]> {
    const url = `${baseURL}user_beehives/`;

    // return this.http.get<any[]>(url, httpOptions);
    return of([
      {
        point: null,
        name: "name00",
        count: 99
      },
      {
        point: null,
        name: "name01",
        count: 3
      },
      {
        point: null,
        name: "name02",
        count: 24
      },
      {
        point: null,
        name: "name03",
        count: 27
      },
      {
        point: null,
        name: "name04",
        count: 6
      }
    ]);
  }
  public getAllMyNotifications(): Observable<any[]> {
    const url = `${baseURL}user_notifications/`;
    // return this.http.get<any[]>(url, httpOptions);
    return of([
      {
        id: null,
        beehives: {
          point: null,
          name: "name00",
          count: 9
        },
        status: 0
      },
      {
        id: null,
        beehives: {
          point: null,
          name: "name01",
          count: 12
        },
        status: 1
      },
      {
        id: null,
        beehives: {
          point: null,
          name: "name02",
          count: 9
        },
        status: 2
      }
    ]);
  }
}

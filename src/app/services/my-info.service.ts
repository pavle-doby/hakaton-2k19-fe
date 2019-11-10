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
    const url = `${baseURL}plots/user_plots/`;
    return this.http.get<any[]>(url, httpOptions);
  }
  public getAllMyBeehives(): Observable<any[]> {
    const url = `${baseURL}beehives/user/`;

    return this.http.get<any[]>(url, httpOptions);
  }
  public getAllMyNotifications(): Observable<any[]> {
    const url = `${baseURL}notifications/`;
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

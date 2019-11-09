import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserRegister } from "../models/userRegister";
import { baseURL, httpOptions } from "src/assets/config";
import { MyToken } from "../models/token";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  public signIn(userRegister: UserRegister): Observable<any> {
    const url = `${baseURL}user/register/`;
    return this.http.post(url, userRegister, httpOptions);
  }
  public getToken(user: UserRegister): Observable<MyToken> {
    const url = `${baseURL}user/api/token/`;
    return this.http.post<MyToken>(url, user, httpOptions);
  }
  public getAllUsers(): Observable<any[]> {
    const url = `${baseURL}user/get_all`;
    return this.http.get<any[]>(url, httpOptions);
  }
}

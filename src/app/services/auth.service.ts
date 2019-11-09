import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserAuth } from "../models/userAuth";
import { UserRegister } from "../models/userRegister";
import { baseURL, httpOptions } from "src/assets/config";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signIn(userRegister: UserRegister): Observable<any> {
    const url = `${baseURL}user/register/`;
    return this.http.post(url, userRegister, httpOptions);
  }
}

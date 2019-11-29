import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MyToken } from "../models/token";
import { Store } from "@ngrx/store";
import { State } from "../store/store";
import { baseSocketURL } from "src/assets/config";

@Injectable({
  providedIn: "root"
})
export class SocketService {
  public $token: Observable<MyToken>;
  public nodeURL: string = "";
  public socket: WebSocket;

  constructor() {
    // TODO: CHANGE FIXED ADMIN
    this.socket = new WebSocket(baseSocketURL + "admin");
  }
}

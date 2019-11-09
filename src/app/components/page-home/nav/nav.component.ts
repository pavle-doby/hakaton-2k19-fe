import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/store";
import { Observable } from "rxjs";
import { MyToken } from "src/app/models/token";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  public $token: Observable<MyToken>;
  public isLoggedIn: boolean = false;

  constructor(private $store: Store<State>) {
    this.$token = this.$store.select(state => state.token);
  }

  ngOnInit() {
    this.$token.subscribe(token => {
      this.isLoggedIn = !!token;
    });
  }
}

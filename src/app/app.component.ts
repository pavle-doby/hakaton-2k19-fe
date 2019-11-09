import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UserRegister } from "./models/userRegister";
import { Store } from "@ngrx/store";
import { State } from "./store/store";
import { User } from "./models/user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "client-app";

  public $user: Observable<User>;

  public isLoggedIn: boolean = false;

  constructor(private store$: Store<State>) {
    this.$user = this.store$.select(state => state.user);
  }

  public ngOnInit(): void {
    this.$user.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }
}

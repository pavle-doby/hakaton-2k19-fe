import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogLogInComponent } from "./dialog-log-in/dialog-log-in.component";
import { UserRegister } from "src/app/models/userRegister";
import { UserService } from "src/app/services/user.service";
import { setTokenInHttpClientHeaders } from "src/assets/config";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/store";
import { Observable } from "rxjs";
import { UserLogInSuccess, UserLogInAsGuest } from "src/app/store/actions";
import { DialogSignInComponent } from "./dialog-sign-in/dialog-sign-in.component";
import { User } from "src/app/models/user";

@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.scss"]
})
export class PageLoginComponent implements OnInit {
  public logInBool: boolean = false;

  public $user: Observable<UserRegister>;
  public user: UserRegister;

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private store$: Store<State>
  ) {}

  ngOnInit() {}
  openDialogLogIn(): void {
    const dialogRef = this.dialog.open(DialogLogInComponent, {
      data: new User()
    });

    dialogRef.afterClosed().subscribe(user => {
      console.log("The dialog was closed", { user });
      if (user) {
        if (user.username && user.password) {
          this.userService
            .getToken(user)
            .toPromise()
            .then(token => {
              setTokenInHttpClientHeaders(token.access);
              this.store$.dispatch(new UserLogInSuccess(user));
            })
            .catch(err => {
              console.log({ err });
            });
        }
      }
    });
  }
  openDialogSignIn(): void {
    const dialogRef = this.dialog.open(DialogSignInComponent, {
      data: new User()
    });

    dialogRef.afterClosed().subscribe(user => {
      console.log("The dialog was closed", { user });
      if (user) {
        if (user.username && user.password) {
          this.userService
            .signIn(user)
            .toPromise()
            .then(res => {
              this.userService
                .getToken(user)
                .toPromise()
                .then(token => {
                  setTokenInHttpClientHeaders(token.access);
                  this.store$.dispatch(new UserLogInSuccess(user));
                })
                .catch(err => {
                  console.log(err);
                });
            })
            .catch(err => {
              console.log({ err });
            });
        }
      }
    });
  }
  logInAsGuest() {
    this.store$.dispatch(new UserLogInAsGuest(new User()));
  }
}

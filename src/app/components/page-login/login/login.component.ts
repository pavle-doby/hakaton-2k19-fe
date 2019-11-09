import { Component, OnInit } from "@angular/core";
import { State } from "src/app/store/store";
import { MatDialog } from "@angular/material/dialog";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { DialogLogInComponent } from "../dialog-log-in/dialog-log-in.component";
import { User } from "src/app/models/user";
import { setTokenInHttpClientHeaders } from "src/assets/config";
import { UserLogInSuccess } from "src/app/store/actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private store$: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {}
  openDialogLogIn(): void {
    const dialogRef = this.dialog.open(DialogLogInComponent, {
      data: new User()
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
        if (user.username && user.password) {
          this.userService
            .getToken(user)
            .toPromise()
            .then(token => {
              setTokenInHttpClientHeaders(token.access);
              this.store$.dispatch(new UserLogInSuccess(user, token));
              this.router.navigateByUrl("/home");
            })
            .catch(err => {
              console.log({ err });
            });
        }
      }
    });
  }
}

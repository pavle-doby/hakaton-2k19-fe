import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserService } from "src/app/services/user.service";
import { Store } from "@ngrx/store";
import { DialogSignInComponent } from "../dialog-sign-in/dialog-sign-in.component";
import { User } from "src/app/models/user";
import { setTokenInHttpClientHeaders } from "src/assets/config";
import {
  UserLogInSuccess,
  GetMyPlots,
  GetMyBeehives
} from "src/app/store/actions";
import { State } from "src/app/store/store";
import { Router } from "@angular/router";
import { MyInfoService } from "src/app/services/my-info.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private store$: Store<State>,
    private router: Router,
    private myInfoService: MyInfoService
  ) {}

  ngOnInit() {}
  openDialogSignIn(): void {
    const dialogRef = this.dialog.open(DialogSignInComponent, {
      data: new User()
    });

    dialogRef.afterClosed().subscribe(user => {
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
                  this.store$.dispatch(new UserLogInSuccess(user, token));
                  this.router.navigateByUrl("/home");
                  this.myInfoService
                    .getAllMyPlots()
                    .toPromise()
                    .then(plots => {
                      if (plots.length) {
                        this.store$.dispatch(new GetMyPlots(plots));
                      }
                    })
                    .catch(err => {
                      console.log({ err });
                    });
                  this.myInfoService
                    .getAllMyBeehives()
                    .toPromise()
                    .then(allMyBeehives => {
                      // console.log({ allMyBeehives });

                      if (allMyBeehives.length) {
                        this.store$.dispatch(new GetMyBeehives(allMyBeehives));
                      }
                    })
                    .catch(err => {
                      console.log({ err });
                    });
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
}

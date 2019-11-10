import { Component, OnInit } from "@angular/core";
import { MyInfoService } from "src/app/services/my-info.service";
import { not } from "@angular/compiler/src/output/output_ast";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/store";
import { PlotSelect, BeehiveSelect } from "src/app/store/actions";
import { Observable } from "rxjs";
import { MyToken } from "src/app/models/token";
import { SocketService } from "src/app/services/socket.service";
import { baseURL, baseSocketURL } from "src/assets/config";

const StatusColorClasses = [
  "my-info--healthy",
  "my-info--warning",
  "my-info--danger"
];

@Component({
  selector: "app-my-info",
  templateUrl: "./my-info.component.html",
  styleUrls: ["./my-info.component.scss"]
})
export class MyInfoComponent implements OnInit {
  public myPlots: any[] = [];
  public myNotifications: any[] = [];
  public myBeehives: any[] = [];

  public $myPlots: Observable<any[]>;
  public $myNotifications: Observable<any[]>;
  public $myBeehives: Observable<any[]>;

  public $token: Observable<MyToken>;
  public isLoggedIn: boolean;
  private nodeURL = ``;

  constructor(
    private myInfoService: MyInfoService,
    private $store: Store<State>,
    private io: SocketService
  ) {
    this.$token = this.$store.select(state => state.token);
    this.$myPlots = this.$store.select(state => state.myPlots);
    this.$myBeehives = this.$store.select(state => state.myBeehives);
    this.$myNotifications = this.$store.select(state => state.myNotifications);
  }

  ngOnInit() {
    this.$token.subscribe(token => {
      this.isLoggedIn = !!token;
      if (this.isLoggedIn) {
        if (this.io.socket) {
          // this.io.socket.send(JSON.stringify({ username: token.username }));
          this.io.socket.onmessage = event => {
            console.log("my-info-io:", event.data);
          };
        }
      }
    });
    // this.myInfoService
    //   .getAllMyPlots()
    //   .toPromise()
    //   .then(plots => {
    //     if (plots.length) {
    //       this.myPlots = plots;
    //     }
    //   })
    //   .catch(err => {
    //     console.log({ err });
    //   });
    // this.myInfoService
    //   .getAllMyBeehives()
    //   .toPromise()
    //   .then(allMyBeehives => {
    //     console.log({ allMyBeehives });
    //     if (allMyBeehives.length) {
    //       this.myBeehives = allMyBeehives;
    //     }
    //   })
    //   .catch(err => {
    //     console.log({ err });
    //   });
    // this.myInfoService
    //   .getAllMyNotifications()
    //   .toPromise()
    //   .then(notifications => {
    //     if (notifications.length) {
    //       this.myNotifications = notifications;
    //     }
    //   })
    //   .catch(err => {
    //     console.log({ err });
    //   });
  }

  goToPlotOnMap(plot) {
    console.log("goToPlotOnMap", plot);
    this.$store.dispatch(new PlotSelect(plot));
  }

  goToBeehivesOnMap(beehives) {
    console.log("goToBeehivesOnMap", beehives);
    this.$store.dispatch(new BeehiveSelect(beehives));
  }
}

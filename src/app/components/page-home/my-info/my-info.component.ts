import { Component, OnInit } from "@angular/core";
import { MyInfoService } from "src/app/services/my-info.service";
import { not } from "@angular/compiler/src/output/output_ast";

enum StatusColor {
  Healthy,
  Warning,
  Danger
}
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

  constructor(private myInfoService: MyInfoService) {}

  ngOnInit() {
    this.myInfoService
      .getAllMyPlots()
      .toPromise()
      .then(plots => {
        if (plots.length) {
          this.myPlots = plots;
        }
      })
      .catch(err => {
        console.log({ err });
      });
    this.myInfoService
      .getAllMyNotifications()
      .toPromise()
      .then(notifications => {
        if (notifications.length) {
          this.myNotifications = notifications;
        }
      })
      .catch(err => {
        console.log({ err });
      });

    this.myInfoService
      .getAllMyBeehives()
      .toPromise()
      .then(allMyBeehives => {
        if (allMyBeehives.length) {
          this.myBeehives = allMyBeehives;
        }
      })
      .catch(err => {
        console.log({ err });
      });
  }

  goToPlotOnMap(plot) {
    console.log("goToPlotOnMap", plot.name);
  }

  goToBeehivesOnMap(beehives) {
    console.log("goToBeehivesOnMap", beehives.name);
  }
}

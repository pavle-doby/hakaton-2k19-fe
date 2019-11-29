import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sm-bottom-bar",
  templateUrl: "./sm-bottom-bar.component.html",
  styleUrls: ["./sm-bottom-bar.component.scss"]
})
export class SmBottomBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  location() {
    console.log("click");
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bee-map",
  templateUrl: "./bee-map.component.html",
  styleUrls: ["./bee-map.component.scss"]
})
export class BeeMapComponent implements OnInit {
  title = "My first AGM project";
  lat = 51.678418;
  lng = 7.809007;

  constructor() {}

  ngOnInit() {}
}

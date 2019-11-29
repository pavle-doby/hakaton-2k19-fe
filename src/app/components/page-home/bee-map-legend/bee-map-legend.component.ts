import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bee-map-legend",
  templateUrl: "./bee-map-legend.component.html",
  styleUrls: ["./bee-map-legend.component.scss"]
})
export class BeeMapLegendComponent implements OnInit {
  public legendArray = [
    {
      classColor: "bee-map-legend--color-danger",
      info: "This area is dangerous for bees"
    },
    {
      classColor: "bee-map-legend--color-warning",
      info: "This area was once dangerous for bees or it will be soon"
    },
    // {
    //   classColor: "bee-map-legend--color-healthy",
    //   info: "This area is healthy for bees"
    // }
  ];
  constructor() {}

  ngOnInit() {}
}

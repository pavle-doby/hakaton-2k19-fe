import { Component, OnInit } from "@angular/core";
import { PesticideTypeStrings } from "src/app/models/plots";

@Component({
  selector: "app-sm-expansion-panel",
  templateUrl: "./sm-expansion-panel.component.html",
  styleUrls: ["./sm-expansion-panel.component.scss"]
})
export class SmExpansionPanelComponent implements OnInit {
  public pesticides: string[] = PesticideTypeStrings;

  constructor() {}

  ngOnInit() {}
  send() {
    console.log("send");
  }
}

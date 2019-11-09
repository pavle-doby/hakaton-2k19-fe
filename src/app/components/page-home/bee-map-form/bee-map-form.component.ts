import { Component, OnInit } from "@angular/core";
import {
  PlotsDTO,
  PesticideType,
  PesticideTypeStrings
} from "src/app/models/plots";
import { Store } from "@ngrx/store";
import { State } from "src/app/store/store";
import { BeeHiveActionsChange } from "src/app/store/actions";
import { BeeHiveActionsState } from "src/app/models/beeHiveActionsState";

@Component({
  selector: "app-bee-map-form",
  templateUrl: "./bee-map-form.component.html",
  styleUrls: ["./bee-map-form.component.scss"]
})
export class BeeMapFormComponent implements OnInit {
  public plot: PlotsDTO;
  public pesticides: string[] = PesticideTypeStrings;

  public plot_id;
  public selectedPesticide: string;

  public color = "accent";
  public checked = false;

  public addBeeHiveBool: boolean = false;
  public deleteBeeHiveBool: boolean = false;
  public updateBeeHiveBool: boolean = false;

  constructor(private $store: Store<State>) {}

  ngOnInit() {}
  selectPesticide(pesticide: string) {
    this.selectedPesticide = pesticide;
  }
  submitForPlot() {
    console.log("submitForPlot");
  }

  addBeeHive() {
    this.addBeeHiveBool = !this.addBeeHiveBool;
    this.deleteBeeHiveBool = false;
    this.updateBeeHiveBool = false;
    this.dispatchBeeHiveChange();
  }

  deleteBeeHive() {
    this.deleteBeeHiveBool = !this.deleteBeeHiveBool;
    this.addBeeHiveBool = false;
    this.updateBeeHiveBool = false;
    this.dispatchBeeHiveChange();
  }

  updateBeeHive() {
    this.updateBeeHiveBool = !this.updateBeeHiveBool;
    this.addBeeHiveBool = false;
    this.deleteBeeHiveBool = false;
    this.dispatchBeeHiveChange();
  }

  private dispatchBeeHiveChange() {
    this.$store.dispatch(
      new BeeHiveActionsChange(
        new BeeHiveActionsState(
          this.addBeeHiveBool,
          this.deleteBeeHiveBool,
          this.updateBeeHiveBool
        )
      )
    );
  }
}

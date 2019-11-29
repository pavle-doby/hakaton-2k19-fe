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
import { baseSocketURL } from "src/assets/config";
import { SocketService } from "src/app/services/socket.service";
import { Observable } from "rxjs";
import { MyToken } from "src/app/models/token";

@Component({
  selector: "app-bee-map-form",
  templateUrl: "./bee-map-form.component.html",
  styleUrls: ["./bee-map-form.component.scss"]
})
export class BeeMapFormComponent implements OnInit {
  public $token: Observable<MyToken>;
  public isLoggedIn: boolean;

  public plot: PlotsDTO;
  public pesticides: string[] = PesticideTypeStrings;

  public plot_id;
  public selectedPesticide: string;

  public color = "accent";
  public checked = false;

  public addBeeHiveBool: boolean = false;
  public deleteBeeHiveBool: boolean = false;
  public updateBeeHiveBool: boolean = false;

  public acaciaBool: boolean;
  public lindenBool: boolean;
  public appleBool: boolean;

  private nodeURL: string;

  constructor(private $store: Store<State>, private io: SocketService) {
    this.$token = this.$store.select(s => s.token);
  }

  ngOnInit() {
    this.$token.subscribe(token => {
      this.isLoggedIn = !!token;
    });
  }
  selectPesticide(pesticide: string) {
    this.selectedPesticide = pesticide;
  }
  submitForPlot() {
    // console.log("submitForPlot", this.plot_id, this.selectedPesticide);

    if (!this.plot_id || !this.selectedPesticide) {
      return;
    }

    this.io.socket.send(
      JSON.stringify({
        plot_id: this.plot_id,
        type_name: this.selectedPesticide
      })
    );
    this.io.socket.onmessage = event => {
      // console.log("bee-map-io", event.data);
    };
  }
  appleChange() {
    this.appleBool = !this.appleBool;
  }
  lindenChange() {
    this.lindenBool = !this.lindenBool;
  }
  acaciaChange() {
    this.acaciaBool = !this.acaciaBool;
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

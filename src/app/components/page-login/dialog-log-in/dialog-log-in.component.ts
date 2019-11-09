import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserRegister } from "src/app/models/userRegister";

@Component({
  selector: "app-dialog-log-in",
  templateUrl: "./dialog-log-in.component.html",
  styleUrls: ["./dialog-log-in.component.scss"]
})
export class DialogLogInComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogLogInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserRegister
  ) {}

  ngOnInit() {}
}

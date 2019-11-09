import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogLogInComponent } from "../dialog-log-in/dialog-log-in.component";
import { User } from "src/app/models/user";

@Component({
  selector: "app-dialog-sign-in",
  templateUrl: "./dialog-sign-in.component.html",
  styleUrls: ["./dialog-sign-in.component.scss"]
})
export class DialogSignInComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogLogInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit() {}
}

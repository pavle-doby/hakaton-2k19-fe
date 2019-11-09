import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { MatAddressFormComponent } from "./components/material-schematics/mat-address-form/mat-address-form.component";
import { MatDashboardComponent } from "./components/material-schematics/mat-dashboard/mat-dashboard.component";
import { MatDragDropComponent } from "./components/material-schematics/mat-drag-drop/mat-drag-drop.component";
import { MatTableComponent } from "./components/material-schematics/mat-table/mat-table.component";
import { MatTreeComponent } from "./components/material-schematics/mat-tree/mat-tree.component";

const routes: Routes = [
  { path: "", component: PageHomeComponent },
  { path: "home", component: PageHomeComponent },
  { path: "mat-address-form", component: MatAddressFormComponent },
  { path: "mat-dashbaord", component: MatDashboardComponent },
  { path: "mat-drag-drop", component: MatDragDropComponent },
  { path: "mat-table", component: MatTableComponent },
  { path: "mat-tree", component: MatTreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

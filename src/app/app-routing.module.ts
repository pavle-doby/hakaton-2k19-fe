import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdressFormComponent } from "./components/adress-form/adress-form.component";
import { TableComponent } from "./components/table/table.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PageHomeComponent } from "./components/page-home/page-home.component";

const routes: Routes = [
  { path: "home", component: PageHomeComponent },
  { path: "address-form", component: AdressFormComponent },
  { path: "table", component: TableComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

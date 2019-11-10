import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { PageHomeComponent } from "./components/page-home/page-home.component";
import { PageLoginComponent } from "./components/page-login/page-login.component";
import { ShellComponent } from "./components/shell/shell.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatAddressFormComponent } from "./components/material-schematics/mat-address-form/mat-address-form.component";
import { MatTableComponent } from "./components/material-schematics/mat-table/mat-table.component";
import { MatDashboardComponent } from "./components/material-schematics/mat-dashboard/mat-dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatTreeComponent } from "./components/material-schematics/mat-tree/mat-tree.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatDragDropComponent } from "./components/material-schematics/mat-drag-drop/mat-drag-drop.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogLogInComponent } from "./components/page-login/dialog-log-in/dialog-log-in.component";
import { DialogSignInComponent } from "./components/page-login/dialog-sign-in/dialog-sign-in.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { rootReducer } from "./store/store";

import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { BeeMapComponent } from "./components/page-home/bee-map/bee-map.component";
import { NavComponent } from "./components/page-home/nav/nav.component";
import { LoginComponent } from "./components/page-login/login/login.component";
import { SigninComponent } from "./components/page-login/signin/signin.component";
import { BeeMapFormComponent } from "./components/page-home/bee-map-form/bee-map-form.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MyInfoComponent } from "./components/page-home/my-info/my-info.component";
import { BeeMapLegendComponent } from "./components/page-home/bee-map-legend/bee-map-legend.component";
import { FooterComponent } from "./components/page-home/footer/footer.component";
import { MatDividerModule } from "@angular/material/divider";

const MaterialComponents = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule,
  MatTreeModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatDividerModule
];

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageLoginComponent,
    ShellComponent,
    MatAddressFormComponent,
    MatTableComponent,
    MatDashboardComponent,
    MatTreeComponent,
    MatDragDropComponent,
    DialogLogInComponent,
    DialogSignInComponent,
    BeeMapComponent,
    NavComponent,
    LoginComponent,
    SigninComponent,
    BeeMapFormComponent,
    MyInfoComponent,
    BeeMapLegendComponent,
    FooterComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDNOJOHPAaq0SyPL6aqSkPbk0VWPSti_L0",
      libraries: ["places", "drawing"]
    }),
    StoreModule.forRoot(rootReducer),
    MaterialComponents,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogLogInComponent, DialogSignInComponent]
})
export class AppModule {}

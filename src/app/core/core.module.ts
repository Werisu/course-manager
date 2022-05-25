import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./components/error-404/error-404.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '**', component: Error404Component }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule{

}

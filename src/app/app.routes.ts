import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailComponent } from "./detail/detail.component";

export const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '',pathMatch: 'full', redirectTo: 'home'},
  {path: '**',pathMatch: 'full', redirectTo: 'home'},

]
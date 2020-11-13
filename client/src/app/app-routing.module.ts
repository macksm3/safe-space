import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// using guidelines: https://angular.io/guide/router
// Nov 13 MWE import modules needed for routing
// import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';

// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  // { path: './about/about.component', component: AboutComponent },
  // { path: './home/home.component', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

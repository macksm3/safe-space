import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@auth0/auth0-angular';

// using guidelines: https://angular.io/guide/router
// Nov 13 MWE import modules needed for routing
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to home page
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'explore', component: ExploreComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// using guidelines: https://angular.io/guide/router
// Nov 13 MWE import modules needed for routing
import { AboutComponent } from './pages/about/about.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './global/table/table.component';
import { UserFormComponent } from './forms/userform/userform.component';
import { ResourceFormComponent } from './forms/resource-form/resource-form.component';
import { AddBusinessComponent } from './forms/add-business/add-business.component';
import { StateTemplateComponent } from './global/state-template/state-template.component';


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to home page

  // Base Pages
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthGuard] },
  { path: 'connect', component: ConnectComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'resources', component: TableComponent, data: { type: "All Resource", state: "all" }},

  // State Pages
  { path: 'newhampshire', component: StateTemplateComponent, data: { stateTitle: "New Hampshire", stateName: "nh" }, canActivate: [AuthGuard] },
  { path: 'vermont', component: StateTemplateComponent, data: { stateTitle: "Vermont", stateName: "vt" }, canActivate: [AuthGuard] },
  { path: 'newyork', component: StateTemplateComponent, data: { stateTitle: "New York", stateName: "ny" }, canActivate: [AuthGuard] },
  { path: 'massachusetts', component: StateTemplateComponent, data: { stateTitle: "Massachusetts", stateName: "ma" }, canActivate: [AuthGuard]  },
  { path: 'maine', component: StateTemplateComponent, data: { stateTitle: "Maine", stateName: "me" }, canActivate: [AuthGuard] },


  // Maine Resources
  { path: 'me-cafe', component: TableComponent, data: { type: "cafe", state: "me" }, canActivate: [AuthGuard] },
  { path: 'me-restaurants', component: TableComponent, data: { type: "restaurant", state: "me" }, canActivate: [AuthGuard] },
  { path: 'me-resources', component: TableComponent, data: { type: "resource", state: "me" }, canActivate: [AuthGuard] },

  // Massachusettes Resources
  { path: 'ma-cafe', component: TableComponent, data: { type: "cafe", state: "ma" }, canActivate: [AuthGuard] },
  { path: 'ma-restaurants', component: TableComponent, data: { type: "restaurant", state: "ma" }, canActivate: [AuthGuard] },
  { path: 'ma-resources', component: TableComponent, data: { type: "resource", state: "ma" }, canActivate: [AuthGuard]  },

  // New York Resources
  { path: 'ny-cafe', component: TableComponent, data: { type: "cafe", state: "ny" }, canActivate: [AuthGuard] },
  { path: 'ny-restaurants', component: TableComponent, data: { type: "restaurant", state: "ny" }, canActivate: [AuthGuard] },
  { path: 'ny-resources', component: TableComponent, data: { type: "resource", state: "ny" }, canActivate: [AuthGuard] },

  // New Hampshire Resources
  { path: 'nh-cafe', component: TableComponent, data: { type: "cafe", state: "nh" }, canActivate: [AuthGuard] },
  { path: 'nh-restaurants', component: TableComponent, data: { type: "restaurant", state: "nh" }, canActivate: [AuthGuard] },
  { path: 'nh-resources', component: TableComponent, data: { type: "resource", state: "nh" }, canActivate: [AuthGuard] },



  // Forms
  { path: 'addbusiness', component: AddBusinessComponent, canActivate: [AuthGuard] },
  { path: 'userform', component: UserFormComponent },
  { path: 'resourceform', component: ResourceFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

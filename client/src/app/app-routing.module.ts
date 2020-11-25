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
import { TableComponent } from './table/table.component';
import { UserFormComponent } from './forms/userform/userform.component';
import { ResourceFormComponent } from './forms/resource-form/resource-form.component';
import { AddBusinessComponent } from './forms/add-business/add-business.component';
import { StateTemplateComponent } from './state-template/state-template.component';


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to home page
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'explore', component: ExploreComponent},
  { path: 'connect', component: ConnectComponent, canActivate: [AuthGuard] },
  { path: 'resources', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'newhampshire', component: StateTemplateComponent, data: {stateName: "New Hampshire"}, canActivate: [AuthGuard] },
  { path: 'vermont', component: StateTemplateComponent, data: {stateName: "Vermont"}, canActivate: [AuthGuard] },
  { path: 'newyork', component: StateTemplateComponent, data: {stateName: "New York"}, canActivate: [AuthGuard]},
  { path: 'massachusetts', component: StateTemplateComponent, data: {stateName: "Massachusetts"} },
  { path: 'maine', component: StateTemplateComponent, data: {stateName: "Maine"} },
  { path: 'addbusiness', component: AddBusinessComponent, canActivate: [AuthGuard] },
  { path: 'coffeeshops', component: TableComponent, data: {tableName: "Cafe"}, canActivate: [AuthGuard] },
  { path: 'restaurants', component: TableComponent, data: {tableName: "Restaurants"}, canActivate: [AuthGuard] },
  { path: 'resources', component: TableComponent, data: {tableName: "Wonky"}, canActivate: [AuthGuard] },
  { path: 'userform', component: UserFormComponent },
  { path: 'resourceform', component: ResourceFormComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

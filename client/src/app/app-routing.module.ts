import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '@auth0/auth0-angular';

// using guidelines: https://angular.io/guide/router
// Nov 13 MWE import modules needed for routing
import { AboutComponent } from './pages/about/about.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TableComponent } from './table/table.component';
import { TestApiComponent } from './test-api/test-api.component';
import { UserFormComponent } from './forms/userform/userform.component';
import { ResourceFormComponent } from './forms/resource-form/resource-form.component';
import { AddBusinessComponent } from './forms/add-business/add-business.component';
import { ResourcesComponent } from './resource-folder/resources/resources.component';
import { NewhampshireComponent } from './states/newhampshire/newhampshire.component';
import { VermontComponent } from './states/vermont/vermont.component';
import { NewyorkComponent } from './states/newyork/newyork.component';
import { MassachusettsComponent } from './states/massachusetts/massachusetts.component';
import { MaineComponent } from './states/maine/maine.component';
import { CoffeeShopsComponent } from './resource-folder/coffee-shops/coffee-shops.component';
import { RestaurantsComponent } from './resource-folder/restaurants/restaurants.component';
import { MiscComponent } from './resource-folder/misc/misc.component';
import { UserComponent } from './services/user.component';


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to home page
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'brendan', component: TestApiComponent},
  { path: 'connect', component: ConnectComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'newhampshire', component: NewhampshireComponent },
  { path: 'vermont', component: VermontComponent },
  { path: 'newyork', component: NewyorkComponent },
  { path: 'massachusetts', component: MassachusettsComponent },
  { path: 'maine', component: MaineComponent },
  { path: 'addbusiness', component: AddBusinessComponent },
  { path: 'coffeeshops', component: CoffeeShopsComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'misc', component: MiscComponent },
  { path: 'userform', component: UserFormComponent },
  { path: 'resourceform', component: ResourceFormComponent },
  { path: 'users', component: UserComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

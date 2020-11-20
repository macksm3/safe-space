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
<<<<<<< HEAD
import { TestApiComponent } from './test-api/test-api.component';
=======
import { UserFormComponent } from './userform/userform.component';
import { ConnectComponent } from './connect/connect.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewhampshireComponent } from './newhampshire/newhampshire.component';
import { VermontComponent } from './vermont/vermont.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { MassachusettsComponent } from './massachusetts/massachusetts.component';
import { MaineComponent } from './maine/maine.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { CoffeeShopsComponent } from './coffee-shops/coffee-shops.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MiscComponent } from './misc/misc.component';
>>>>>>> fa970b8c9ab7b79165bb42bb181e8f1df6b5269c


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to home page
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'explore', component: ExploreComponent },
<<<<<<< HEAD
  { path: 'brendan', component: TestApiComponent},
=======
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
>>>>>>> fa970b8c9ab7b79165bb42bb181e8f1df6b5269c
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

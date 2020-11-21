import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// using guidelines: https://angular.io/guide/router
// Nov 13 MWE import modules needed for routing
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';
import { TestApiComponent } from './test-api/test-api.component';
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
import { UserComponent } from './services/user.component';


// Nov 13 MWE define routes in Routes array
const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to home page
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'explore', component: ExploreComponent, canActivate: [AuthGuard] },
  { path: 'brendan', component: TestApiComponent},
  { path: 'connect', component: ConnectComponent, canActivate: [AuthGuard] },
  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'newhampshire', component: NewhampshireComponent, canActivate: [AuthGuard] },
  { path: 'vermont', component: VermontComponent, canActivate: [AuthGuard] },
  { path: 'newyork', component: NewyorkComponent, canActivate: [AuthGuard] },
  { path: 'massachusetts', component: MassachusettsComponent, canActivate: [AuthGuard] },
  { path: 'maine', component: MaineComponent, canActivate: [AuthGuard] },
  { path: 'addbusiness', component: AddBusinessComponent, canActivate: [AuthGuard] },
  { path: 'coffeeshops', component: CoffeeShopsComponent, canActivate: [AuthGuard] },
  { path: 'restaurants', component: RestaurantsComponent, canActivate: [AuthGuard] },
  { path: 'misc', component: MiscComponent, canActivate: [AuthGuard] },
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

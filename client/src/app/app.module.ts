import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

import { AuthModule } from '@auth0/auth0-angular';

import { GlobalModule } from './global.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './global/header/header.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { ResourcesComponent } from './resource-folder/resources/resources.component';
import { NewhampshireComponent } from './states/newhampshire/newhampshire.component';
import { TableComponent } from './table/table.component';
import { TestApiComponent } from './test-api/test-api.component';

// Adding Angular Material Module (also added to imports below)
import { AuthButtonComponent } from './buttons/auth-button/auth-button.component';
import { UserProfileComponent } from './forms/user-profile/user-profile.component';
import { UserFormComponent } from './forms/userform/userform.component';
import { ResourceFormComponent } from './forms/resource-form/resource-form.component';
import { NavComponent } from './global/nav/nav.component';
import { HomeLoginButtonComponent } from './buttons/home-login-button/home-login-button.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StateTemplateComponent } from './states/state-template/state-template.component';
import { VermontComponent } from './states/vermont/vermont.component';
import { NewyorkComponent } from './states/newyork/newyork.component';
import { MassachusettsComponent } from './states/massachusetts/massachusetts.component';
import { MaineComponent } from './states/maine/maine.component';
import { AddBusinessComponent } from './forms/add-business/add-business.component';
import { CoffeeShopsComponent } from './resource-folder/coffee-shops/coffee-shops.component';
import { RestaurantsComponent } from './resource-folder/restaurants/restaurants.component';
import { MiscComponent } from './resource-folder/misc/misc.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ExploreComponent,
    ConnectComponent,
    ResourcesComponent,
    NewhampshireComponent,
    TableComponent,
    TestApiComponent,
    AuthButtonComponent,
    UserProfileComponent,
    UserFormComponent,
    ResourceFormComponent,
    NavComponent,
    HomeLoginButtonComponent,
    ProfileComponent,
    StateTemplateComponent,
    VermontComponent,
    NewyorkComponent,
    MassachusettsComponent,
    MaineComponent,
    AddBusinessComponent,
    CoffeeShopsComponent,
    RestaurantsComponent,
    MiscComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'safe-space.us.auth0.com',
      clientId: '7fi7IEnY7UuPX6SvpUG0UG9L33HdnHW5'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    FlexLayoutModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // added with Angular Material Model for us with tables
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

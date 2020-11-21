import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

// added custom elements schema for use with tables
import { GlobalModule } from './global.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ExploreComponent } from './explore/explore.component';
import { ConnectComponent } from './connect/connect.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewhampshireComponent } from './newhampshire/newhampshire.component';
import { TableComponent } from './table/table.component';
import { TestApiComponent } from './test-api/test-api.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Adding Angular Material Module (also added to imports below)
import { AngularMaterialModule } from './angular-material.module';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './userform/userform.component';
import { MatSelectModule } from '@angular/material/select';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { NavComponent } from './nav/nav.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { HomeLoginButtonComponent } from './home-login-button/home-login-button.component';
import { ProfileComponent } from './profile/profile.component';
import { StateTemplateComponent } from './state-template/state-template.component';
import { VermontComponent } from './vermont/vermont.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { MassachusettsComponent } from './massachusetts/massachusetts.component';
import { MaineComponent } from './maine/maine.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { CoffeeShopsComponent } from './coffee-shops/coffee-shops.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MiscComponent } from './misc/misc.component';

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
    LoginButtonComponent,
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

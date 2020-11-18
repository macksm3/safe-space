import { BrowserModule } from '@angular/platform-browser';

// added custom elements schema for use with tables
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AuthButtonComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GlobalModule } from './global.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { ExploreComponent } from './explore/explore.component';
import { ConnectComponent } from './connect/connect.component';
import { ResourcesComponent } from './resources/resources.component';
import { NewhampshireComponent } from './newhampshire/newhampshire.component';
import { TableComponent } from './table/table.component';


// Adding Angular Material Module (also added to imports below)
import { AngularMaterialModule } from './angular-material.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
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
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: 'safe-space.us.auth0.com',
      clientId: '7fi7IEnY7UuPX6SvpUG0UG9L33HdnHW5'
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalModule,
    FlexLayoutModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // added with Angular Material Model for us with tables
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

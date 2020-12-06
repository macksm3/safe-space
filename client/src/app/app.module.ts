import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouteReuseStrategy } from '@angular/router';

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

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './global/header/header.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { MatTableResponsiveModule } from './global/mat-table-responsive/mat-table-responsive.module';
import { TableComponent } from './global/table/table.component';

// Adding Angular Material Module (also added to imports below)
import { UserFormComponent } from './forms/userform/userform.component';
import { NavComponent } from './global/nav/nav.component';
import { HomeLoginButtonComponent } from './global/home-login-button/home-login-button.component';
import { ResourceFormComponent } from './pages/resource-form/resource-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StateTemplateComponent } from './pages/state-template/state-template.component';
import { PlanetComponent } from './global/planet/planet.component';
import { ButtonComponent } from './global/button/button.component';
import { ChatService } from './services/chat.service';

let hostname = window.location.hostname;
let url = ( hostname === 'localhost' ) ? `${window.location.protocol}//${hostname}:3000` : undefined;
const config: SocketIoConfig = { url: url, options: {} };
// const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

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
    TableComponent,
    UserFormComponent,
    ResourceFormComponent,
    NavComponent,
    HomeLoginButtonComponent,
    ProfileComponent,
    StateTemplateComponent,
    PlanetComponent,
    ButtonComponent
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
    MatCheckboxModule,
    MatTableResponsiveModule,
    SocketIoModule.forRoot(config)
  ],
  entryComponents: [],
  providers: [ChatService],
  bootstrap: [AppComponent],
  // added with Angular Material Model for us with tables
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AuthButtonComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GlobalModule } from './global.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
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
    // FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

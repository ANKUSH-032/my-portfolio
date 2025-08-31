import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component';
import { BioInfoComponent } from './bio-info/bio-info.component';
import { LightboxModule } from 'ngx-lightbox';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    BioInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    RouterModule.forRoot([
      { path: 'profile/:username', component: BioInfoComponent } // route with username param
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

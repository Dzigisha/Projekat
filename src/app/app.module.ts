import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './comp/header/header.component';
import { ParallaxComponent } from './comp/parallax/parallax.component';
import { FooterComponent } from './comp/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParallaxComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './comp/header/header.component';
import { ParallaxComponent } from './comp/parallax/parallax.component';
import { FooterComponent } from './comp/footer/footer.component';
import { KarticaComponent } from './comp/kartica/kartica.component';
import { KorisnikKarticaComponent } from './comp/korisnik-kartica/korisnik-kartica.component';
import { GrupaKorisniciComponent } from './comp/grupa-korisnici/grupa-korisnici.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParallaxComponent,
    FooterComponent,
    KarticaComponent,
    KorisnikKarticaComponent,
    GrupaKorisniciComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisnikKreacijaComponent } from './comp/korisnik-kreacija/korisnik-kreacija.component';
import { ParallaxComponent } from './comp/parallax/parallax.component';
import { AdminPanelComponent } from './stranice/admin-panel/admin-panel.component';
import { GlavnaComponent } from './stranice/glavna/glavna.component';
import { LoginComponent } from './stranice/login/login.component';
import { RegistracijaComponent } from './stranice/registracija/registracija.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:GlavnaComponent},
  {path:'registracija',component:RegistracijaComponent},
  {path:'admin',component:AdminPanelComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

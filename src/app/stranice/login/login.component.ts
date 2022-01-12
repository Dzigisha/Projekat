import { Component, OnInit } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import { KorisniciService } from 'src/app/service/korisnici.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;

  constructor(private korisnikServis:KorisniciService) { }

  ngOnInit(): void {
  }
  login(){
    const lista_korisnika =this.korisnikServis.getKorisnici().subscribe(
      res=>{
        const ulogovan = res.find((k:korisnik)=>{
          return k.username === this.username && k.password === this.password
        });
        if (ulogovan)
        alert('Uspesan login')

      }
    )

  }
}

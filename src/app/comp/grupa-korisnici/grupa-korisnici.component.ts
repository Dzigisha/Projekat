import { Component, OnInit } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import { KorisniciService } from 'src/app/service/korisnici.service';

@Component({
  selector: 'app-grupa-korisnici',
  templateUrl: './grupa-korisnici.component.html',
  styleUrls: ['./grupa-korisnici.component.css']
})
export class GrupaKorisniciComponent implements OnInit {

  korisnici!:korisnik[]

  constructor(private korisniciServis:KorisniciService) { }

  ngOnInit(): void {
    this.korisniciServis.getKorisnici().subscribe((korisnici)=>this.korisnici=korisnici)
  }

  brisanje_korisnika(korisnik:korisnik){
    this.korisniciServis.deleteKorisnik(korisnik).subscribe(()=>(this.korisnici=this.korisnici.filter((k)=>k.id !== korisnik.id)))
  }

}

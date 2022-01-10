import { Injectable } from '@angular/core';
import { korisnik } from 'korisnici_klase';
import{HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  private korisniciAPI = 'http://localhost:3000/korisnici';
  constructor(private http:HttpClient) { }

  //preuzimanje liste u observable preko http
  getKorisnici():Observable<korisnik[]>{
    return this.http.get<korisnik[]>(this.korisniciAPI)

  }
  //dodavanje korisnika preko http
  postKorisnik(){}
  //update korisnika preko http
  putKorisnik(){}
  //brisanje korisnika preko http
  deleteKorisnik(korisnik:korisnik):Observable<korisnik>{
    const url = `${this.korisniciAPI}/${korisnik.id}`;
    return this.http.delete<korisnik>(url);

  }
}

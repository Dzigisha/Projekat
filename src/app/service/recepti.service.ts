import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { recept } from 'recepti_klasa';
@Injectable({
  providedIn: 'root'
})
export class ReceptiService {

  receptiApi= "http://localhost:3001/recepti"

  constructor(private http:HttpClient) { }
  
  
  getRecepti():Observable<recept[]>{
    return this.http.get<recept[]>(this.receptiApi)


  }
}


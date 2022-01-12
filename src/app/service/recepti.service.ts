import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReceptiService {

  receptiApi= "http://localhost:3001/recepti"

  constructor(private http:HttpClientModule) { }
  
  
  getRecepti(){

  }
}


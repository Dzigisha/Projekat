import { Component, OnInit } from '@angular/core';
import { recept } from 'recepti_klasa';
import { ReceptiService } from 'src/app/service/recepti.service';

@Component({
  selector: 'app-glavna',
  templateUrl: './glavna.component.html',
  styleUrls: ['./glavna.component.css']
})
export class GlavnaComponent implements OnInit {

  recepti!:recept[];
  constructor( private receptServis:ReceptiService) { }

  ngOnInit(): void {
    this.receptServis.getRecepti().subscribe((recepti)=>
    this.recepti=recepti  )
  }

}

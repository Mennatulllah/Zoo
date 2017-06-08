import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import * as _ from 'lodash';
import {Animal } from '../../Interfaces/Animal';

@Component({
  moduleId:module.id,
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: any = [];

  constructor(private animalServ: AnimalsService) { }
  data: Animal[] = [];
  ngOnInit() {
    // Retrieve posts from the API
    this.animalServ.getMammals().subscribe(animals => { 
      this.data = (<Animal[]> animals).filter(a=>a.animalType == '591343932f90173e20e41ea8'); 
      console.log(this.data[0].nickName);
   });
//  console.log("Data out: ",this.data);
    
  }

}

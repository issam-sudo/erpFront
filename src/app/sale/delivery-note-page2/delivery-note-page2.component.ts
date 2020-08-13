import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators } from '@angular/forms';


interface delai{

  name: string;
  adress: string;
  adressLivr:string;
}

@Component({
  selector: 'app-delivery-note-page2',
  templateUrl: './delivery-note-page2.component.html',
  styleUrls: ['./delivery-note-page2.component.scss']
})
export class DeliveryNotePage2Component implements OnInit {

  value: string;
  selectedValue1: string;
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);
  users = [
    { name: 'Hjije Youssef',adress:'Rue La fontaine 150 brussels'},
    { name: 'Hjije Youssef',adress:'Rue La fontaine 150 brussels'},
    { name: 'majed',adress:'Rue La fontaine 150 brussels'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


interface delai {

  name: string;
  adress: string;
  adressLivr: string;
}


@Component({
  selector: 'app-delivery-note-page2',
  templateUrl: './delivery-note-page2.component.html',
  styleUrls: ['./delivery-note-page2.component.scss']
})
export class DeliveryNotePage2Component implements OnInit {

  value: string;
  selectedUsers: string;
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);
  users = [
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels', adressLivr: 'Rue La fontaine 150 brussels llllllll' },
    { name: 'Hjije Youssef', adress: 'Rue La fontaine 150 brussels' },
    { name: 'majd', adress: 'Rue La fontaine 150 brussels' }
  ];

  champPersoForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });

  champsPerso: any = [];
  disableForm = false;

  selectedUser: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectUserChange(event) {
    this.selectedUser = event.value;
  }
  
  onChampPersoSubmit(){
    if(this.champPersoForm.valid){
      this.champsPerso.push(this.champPersoForm.value);
      this.champPersoForm.reset();
      this.disableChampPersoForm();
    }
  }

  onChampPersoDelete(index){
    this.champsPerso.splice(index, 1);
    this.disableChampPersoForm();
  }
//desable button 
  disableChampPersoForm(){
    const len = this.champsPerso.length;
    if(len==4) { this.disableForm = true }
    else this.disableForm = false;
  }



}

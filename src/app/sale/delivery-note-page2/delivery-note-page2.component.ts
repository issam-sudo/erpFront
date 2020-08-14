import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


interface delai {

  name: string;
  adress: string;
  adressLivr: string;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));

  }
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
    title: new FormControl('testx '),
    content: new FormControl(),
  });

  champsPerso: any[];

  selectedUser: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectUserChange(event) {
    this.selectedUser = event.value;
  }
  matcher = new MyErrorStateMatcher();

  onChampPersoSubmit(){
    console.log(this.champPersoForm.value);
  }



}

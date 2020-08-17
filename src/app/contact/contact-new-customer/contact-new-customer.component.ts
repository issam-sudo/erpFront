import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {FormControl, FormGroupDirective, NgForm, Validators , FormGroup , FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

interface Food {
  value: string;
  viewValue: string;
}
interface Facture {

  art: string;
  description: string;
  quantite: string;
  unite: string;
  unit: string;

  
}


const ELEMENT_DATA: Facture[] = [
  {art: 'hkj',description :'dfgdf', quantite:'dfgdf', unite:'dfg',unit:'3'},


];

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact-new-customer',
  templateUrl: './contact-new-customer.component.html',
  styleUrls: ['./contact-new-customer.component.scss']
})
export class ContactNewCustomerComponent implements OnInit {
  displayedColumns: string[] = ['art','description', 'quantite', 'unite','unit' ,'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  disableForm = false;

  facture : Facture = {
    art :"",
    description :"",
    quantite:"",
    unite: "",
    unit:"",
   

  };
  ELEMENT_DATA: any;
  invoiceForm= new FormGroup({
    art: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    quantite: new FormControl("", [Validators.required]),
    unite: new FormControl("", [Validators.required]),
    unit: new FormControl("", [Validators.required]),
   
  });
  disabled: boolean;
  selectedValue2: any;



  addNew(){
    if(this.invoiceForm.valid){
    ELEMENT_DATA.push(this.invoiceForm.value)
   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.facture = {
    art :"",
    description :"",
    quantite:"",
    unite: "",
    unit:""
  


  };
  this.invoiceForm.reset();
 
 }
}
removenew(i){
  ELEMENT_DATA.splice(i, 1);
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);

}

  checkedMail = false;

  constructor() { }

  ngOnInit(): void {
    
  }
/* 
 update(i){
   this.disabled = false
   ELEMENT_DATA.find(post => post.unit === '3');
 
   
 }
  */
  // tslint:disable-next-line:member-ordering
  nomFormControl = new FormControl('', [
    Validators.required,

  ]);
  matcher = new MyErrorStateMatcher();

  selectedValue1: string;
  foods: Food[] = [
    {value: 'Francais', viewValue: 'Francais'},
    {value: 'Anglais', viewValue: 'Anglais'},
    {value: 'Allemand', viewValue: 'Allemand'}
  ];

  
}

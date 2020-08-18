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

interface Langue {
  value: string;
  viewValue: string;
}

interface Ville {
  value: string;
  viewValue: string;
}
interface Civilite {
  value: string;
  viewValue: string;
}

interface TauxTva {
  value: string;
  viewValue: string;
}

interface DelaiPaiement {
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
    quantite: new FormControl("", [Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]),
    unite: new FormControl("", [Validators.required]),
    unit: new FormControl("", [Validators.required]),
   
  });
  disabled: boolean;
  selectedValue2: any;
  route_active: any;



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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route_active =this.router.url
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
  emailFormControl = new FormControl('', [
    Validators.required
    , Validators.email

  ]);
  adresseFormControl = new FormControl('', [
    Validators.required,

  ]);
  codePostalFormControl = new FormControl('', [
    Validators.required,

  ]);
  paysFormControl = new FormControl('', [
    Validators.required,

  ]);

  villeFormControl = new FormControl('', [
    Validators.required,

  ]);

  langueFormControl = new FormControl('', [
    Validators.required,

  ]);

  matcher = new MyErrorStateMatcher();

  selectedValue1: string;
  langues: Langue[] = [
    {value: 'Francais', viewValue: 'Francais'},
    {value: 'Anglais', viewValue: 'Anglais'},
    {value: 'Allemand', viewValue: 'Allemand'}
  ];
  selectedValueVille: string;
  villes: Ville[] = [
    {value: 'Anvers', viewValue: 'Anvers'},
    {value: 'Gand', viewValue: 'Gand'},
    {value: 'Louvain', viewValue: 'Louvain'}
  ];
  selectedValueCivilite: string;
  civilites: Civilite[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mme', viewValue: 'Mme'},
    {value: 'Mlle', viewValue: 'Mlle'}
  ];

  selectedValueTva: string;
  tauxTva: TauxTva[] = [
    {value: '0.25', viewValue: '25%'},
    {value: '0.20', viewValue: '20%'},
    {value: '0.21', viewValue: '21%'}
  ];



  selectedValueDelaiPaiement: string;
  delaiPaiement: DelaiPaiement[] = [
    {value: 'jours fin de mois', viewValue: 'jours fin de mois'},
    {value: 'jours fin de mois', viewValue: 'jours fin de mois'},
    {value: 'jours fin de mois', viewValue: 'jours fin de mois'}
  ];


  setrouter(e){
    this.route_active = e;
    console.log(this.route_active)
    this.router.navigate([this.route_active]).then(() => {
      window.location.reload();
    }); ;

  }
}

import { Component, OnInit,ViewChild } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators ,FormGroup ,FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elemnt: any[] = [
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000',unit:'Piéces'},

]
@Component({
  selector: 'app-new-product-service',
  templateUrl: './new-product-service.component.html',
  styleUrls: ['./new-product-service.component.css']
})
export class NewProductServiceComponent implements OnInit {


  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act','facture', 'date', 'client', 'montant','unit', 'financement','action'];
  dataSource = elemnt;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  checkedMail = false;

  checkedReception = false;
  langue: any;
  langueValue: string ='fr';
  textLangue: any;
  value: string;
  lng: any;
  langue2: string;
  url: string | ArrayBuffer;
  
  
  showTradiction: any =false;
 
  constructor(private router: Router) { }
  // nomFormControl = new FormControl('', [
  //   Validators.required,

  // ]);
  // prenomFormControl = new FormControl('', [
  //   Validators.required,

  // ]);
  // matcher = new MyErrorStateMatcher();
  // date_chart: any;

  ngOnInit(): void {
  }

  onSelectFile(event) { // called each time file input changes
   
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      console.log(this.url)
      }
    }
}
 
  clickButton(e: string) {
  
    this.langue2  =  (<HTMLInputElement>document.getElementById('textLangue')).value;
    
 console.log(this.langue2)
 
    this.langueValue = e
    console.log(this.langueValue);
    this.showTradiction =true
  }
 
  // tslint:disable-next-line:member-ordering
  nomFormControl = new FormControl('', [
    Validators.required,

  ]);
  prenomFormControl = new FormControl('', [
    Validators.required,

  ]);
  delaiFormControl = new FormControl('', [
    Validators.required,

  ]);
  matcher = new MyErrorStateMatcher();

  selectedValue: string;
  selectedValue1: string;
  selectedCar: string;


}


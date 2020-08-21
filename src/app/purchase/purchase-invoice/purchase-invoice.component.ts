import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {Chart} from 'node_modules/chart.js';
 import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment} from 'moment';
import { AccountService } from 'src/app/preference/services/account.service';
 import {FormControl, FormGroupDirective, NgForm, Validators , FormGroup , FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';


 
import { DomSanitizer } from '@angular/platform-browser';
 
import { environment } from '../../../environments/environment.prod';

interface Civilite {
  value: string;
  viewValue: string;
}



interface Facture {

 /*  art: string;
  description: string;
  quantite: string;
  unite: string;
  unit: string; */
 
  typeFacture :string;
  numFacture :string;
  nom:string;
  date: string;
  echeance:string;
  thtva: string;
  ttva: string;
  ttvac: string;
  deviseform: string;
  tva: string;
  bic: string;
  iban: string;
  communication: string;
  numpiece: string;
  pays: string;
}




const ELEMENT_DATA: Facture[] = [
 

];


interface Pays {
  value: string;
  viewValue: string;
}
interface Devise {
  value: string;
  viewValue: string;
}

interface Type {
  value: string;
  viewValue: string;
}
 /** Error when invalid control is dirty, touched, or submitted. */
 export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {
  displayedColumns: string[] = ['cat','numero', 'date', 'fournisseurs','montant' ,'echeance' , 'retard' ,'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  disableForm = false;
show:boolean =false
  facture : Facture = {
    typeFacture :"",
    numFacture :"",
    nom:"",
    date: "",
    echeance: "",
    thtva: "",
    ttva: "",
    ttvac: "",
    deviseform: "",
    tva: "",
    bic: "",
    iban: "",
    communication: "",
    numpiece: "",
    pays: "",
   

  };
  ELEMENT_DATA: any;




  date:Date =new Date()
 mois:any = this.date.toLocaleDateString(undefined,{  month: 'long' })
  url: any =null;
  hiddenSection: any='false';
 
  constructor(private router: Router,public dialog: MatDialog,public accountService: AccountService) { }

  ngOnInit(): void {
    this.getChart()
    console.log(this.date)
  
    this.accountService.currentdataPurchase.subscribe(data=>{
      this.url =data
      
   
    
    })
 
 
      
   
     
    
 

  
  }
  async getChart(){
    // tslint:disable-next-line:prefer-const
    let ctx = document.getElementById('myChart');
    // tslint:disable-next-line:prefer-const
     new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Fev', 'Mar' , 'Apr', 'May', 'Jun', 'Jul' , 'Out' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
          datasets: [{
              label: 'Achat',
              fill: false,
              data: [60 , 150, 200 , 260, 278 , 280 , 300 , 200 , 366 , 390 , 420 , 250],
              backgroundColor: [
                'rgb(245, 89, 82 ,0)',


              ],
              borderColor: [
                'rgb(245, 89, 82 ,1)',


              ],
              borderWidth: 1,
              pointStyle: 'circle',
              pointRadius: '5',
              pointBackgroundColor: 'rgb(245, 89, 82 ,1)',
              pointBorderColor: 'rgb(245, 89, 82 ,1)'
          } 
        ]
      },
      options: {
        tooltips: {
          custom(tooltip) {
            if (!tooltip) { return; }
            // disable displaying the color box;
            tooltip.displayColors = false;
          },
          callbacks: {
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }, label(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].label + ':' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '€';

            },


          },

          yAlign: 'bottom',
          backgroundColor: 'rgb(50, 61, 65)',

      },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 25,
              bottom: 0
          },

      },
        legend: {
          display: true,
          position: 'left',
          align: 'start',

          labels: {

            usePointStyle: true,


          }
      },
          scales: {

            xAxes: [{
              ticks: {
                padding: 0
              },
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,

              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      display: false,


                  },
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                  }
              }]
          }
      }
  });
 
   }

   openDialogFileUpload() {
    this.dialog.open(Facture_fileUpload,{
   
      data: {
        animal: 'panda'
      },
      width: '40%',
      height: '45%',
      panelClass: 'my-custom-dialog-class'
    });
  
  }

 

  selectedValueTypes: string;
  types: Type[] = [
    {value: 'Facture', viewValue: 'Facture'},
    {value: 'Note de credit', viewValue: 'Note de credit'}
  
  ];
  selectedValuePays: string;
pays: Pays[] = [
  {value: 'Belgique', viewValue: 'Belgique'},
  {value: 'France', viewValue: 'France'},
  {value: 'Maroc', viewValue: 'Maroc'}
];
selectedValueDevise: string;
devise: Devise[] = [
  {value: 'MAD', viewValue: 'MAD'},
  {value: 'EUR', viewValue: 'EUR'},
  {value: 'USD', viewValue: 'USD'}
];




 
 
matcher = new MyErrorStateMatcher();



   setHidden(e){
this.hiddenSection =e
   }

   invoiceForm= new FormGroup({
    typeFacture: new FormControl(""),
    numFacture: new FormControl("", [Validators.required]),
    nom: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
    echeance: new FormControl("", [Validators.required]),
    thtva: new FormControl("", [Validators.required]),
    ttva: new FormControl("", [Validators.required]),
    ttvac: new FormControl("", [Validators.required]),
    deviseform: new FormControl("", [Validators.required]),
    tva: new FormControl(""),
    bic: new FormControl(""),
    iban: new FormControl(""),
    communication: new FormControl(""),
    numpiece: new FormControl(""),
    pays: new FormControl(""),
  });
  selectedValueCivilite: string;
  civilites: Civilite[] = [
    {value: 'Mr', viewValue: 'Mr'},
    {value: 'Mme', viewValue: 'Mme'},
    {value: 'Mlle', viewValue: 'Mlle'}
  ];
   addNew(){
    if(this.invoiceForm.valid){
    ELEMENT_DATA.push(this.invoiceForm.value)
   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.facture = {
    typeFacture :"",
    numFacture :"",
    nom:"",
    date: "",
    echeance: "",
    thtva: "",
    ttva: "",
    ttvac: "",
    deviseform: "",
    tva: "",
    bic: "",
    iban: "",
    communication: "",
    numpiece: "",
    pays: "",
  };
  this.invoiceForm.reset();
  this.url=null;
 }
}
removenew(i){
  ELEMENT_DATA.splice(i, 1);
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);

}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

emptyUrl(){
  this.url =null
}
}




var reader = new FileReader();
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'facture_fileUpload',
  templateUrl: 'facture_fileUpload.html',
  
  styleUrls: ['./purchase-invoice.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Facture_fileUpload {
  url: any;
 
  size: any;
  type: any;
  name: any;
  
 
  
  constructor(private router: Router, public dialogRef: MatDialogRef<Facture_fileUpload>  ,public accountService:AccountService  ) {

   }
  
 


  
  ngOnInit(): void {
    console.log(this.url)
 
}
onSelectFile(event) { // called each time file input changes
    

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    console.log(event.target.files[0])
    this.name = event.target.files[0].name
    this.size = event.target.files[0].size
    this.type = event.target.files[0].type
    
 
    reader.onload = (event) => { // called once readAsDataURL is completed
     
      this.url = event.target.result;
   
      
     
      
    }
  
  
  
}

validerbtn(event){
 
  this.accountService.urlPathPurchase.next(this.url.toString()) 
  this.router.navigate(['/purchase/invoice'])
  
 
  this.dialogRef.close();

}
 


}



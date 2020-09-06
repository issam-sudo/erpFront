import { Component, OnInit, Inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {FormControl, FormGroupDirective, NgForm, Validators , FormGroup , FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
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
  // tslint:disable-next-line:component-selector
  selector: 'accountAddUser',
  templateUrl: 'accountAddUser.html',
  styleUrls: ['./account.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AccountAddUserFrom {

  submitStatus: boolean;
 
  selectedValue1: string;
  foods: Food[] = [
    {value: '0', viewValue: 'Francais'},
    {value: '1', viewValue: 'Anglais'},
    {value: '2', viewValue: 'Allemand'}
  ];

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder , public dialogRef: MatDialogRef<AccountAddUserFrom> ) {  dialogRef.disableClose = false;}
  onNoClick(): void {
    this.dialogRef.close();
  }


   // tslint:disable-next-line:member-ordering
   registerForm: FormGroup = this.formBuilder.group({
    // tslint:disable-next-line:quotemark
    nomFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    // tslint:disable-next-line:quotemark
    usernameFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    // tslint:disable-next-line:quotemark
    prenomFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    emailFormControlDialog: [, { validators: [Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')], updateOn: "change" }],
    langueFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    passwordConfirmFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    passwordCorantFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    passwordFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],
    telephoneFormControlDialog: [, { validators: [Validators.required], updateOn: "change" }],

  });


  submitForm() {
    console.log(this.registerForm.valid);
    this.submitStatus = true;
    this.dialogRef.close();
  }
  matcher = new MyErrorStateMatcher();

}







@Component({
  // tslint:disable-next-line:component-selector
  selector: 'accountFacturation',
  templateUrl: 'accountFacturation.html',
  styleUrls: ['./account.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AccountFacturationFrom {

  submitStatus: boolean;
  selectedValue1: string;
  foods: Food[] = [
    {value: '0', viewValue: 'Belgique'},
    {value: '1', viewValue: 'France'},
    {value: '2', viewValue: 'Allemand'}
  ];
 

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder , public dialogRef: MatDialogRef<AccountFacturationFrom> ) {  dialogRef.disableClose = false;}
  onNoClick(): void {
    this.dialogRef.close();
  }

  

   // tslint:disable-next-line:member-ordering
   registerFormFacturation: FormGroup = this.formBuilder.group({
    // tslint:disable-next-line:quotemark
    nomFormControlDialogFacturation: [, { validators: [Validators.required], updateOn: "change" }],
    // tslint:disable-next-line:quotemark

    // tslint:disable-next-line:quotemark

    emailFormControlDialogFacturation: [, { validators: [Validators.required,Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')], updateOn: "change" }],
    paysFormControlDialogFacturation: [, { validators: [Validators.required], updateOn: "change" }],



  });


  submitForm() {
    console.log(this.registerFormFacturation.valid);
    this.submitStatus = true;
    this.dialogRef.close();
  }
  matcher = new MyErrorStateMatcher();

}










class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}





@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})


 
export class AccountComponent implements OnInit {


  submitStatus: boolean;
  checked: boolean;
  selectedFile: ImageSnippet;
  url: string | ArrayBuffer ='../../assets/addLogoElhoo.png';
 
  constructor(private router: Router , public dialog: MatDialog ) {


  }


  onSelectFile(event) { // called each time file input changes
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;

      }
    }
}
onSelectFileEmpty(event) { // called each time file input changes
 
   
      this.url =  '../../assets/addLogoElhoo.png';
    
  }

 
 

  openDialog() {
    this.dialog.open(AccountAddUserFrom,{
      disableClose: true,
      data: {
        animal: 'panda'
      },
      width: '35%',
      height: '52%',
      panelClass: 'my-custom-dialog-class'
    });

  }


  openDialogFacturation() {
    this.dialog.open(AccountFacturationFrom,{
      disableClose: true,
      data: {
        animal: 'panda'
      },
      width: '35%',
      height: '53%',
      panelClass: 'my-custom-dialog-class'
    });

  }





  // tslint:disable-next-line:member-ordering
  nomFormControl = new FormControl('', [
    Validators.required,

  ]);
  prenomFormControl = new FormControl('', [
    Validators.required,

  ]);
  usernameFormControl = new FormControl('', [
    Validators.required,

  ]);
  langueFormControl = new FormControl('', [
    Validators.required,

  ]);

  passwordConfirmFormControl = new FormControl('', [
    Validators.required,

  ]);
  passwordCorantFormControl = new FormControl('', [
    Validators.required,

  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,

  ]);
  emailFormControl = new FormControl('', [
    Validators.required
    , Validators.email

  ]);


  societeFormControl = new FormControl('', [
    Validators.required,

  ]);


  codePostalFormControl = new FormControl('', [
    Validators.required,

  ]);
  villeFormControl = new FormControl('', [
    Validators.required,

  ]);
  telephoneFormControl = new FormControl('', [
    Validators.required,

  ]);


  matcher = new MyErrorStateMatcher();
  date_chart: any;

  selectedValue: string;
  selectedValue1: string;
  selectedCar: string;

  foods: Food[] = [
    {value: '0', viewValue: 'Francais'},
    {value: '1', viewValue: 'Anglais'},
    {value: '2', viewValue: 'Allemand'}
  ];


  cars: Car[] = [
    {value: 'Liége', viewValue: 'Liége'},
    {value: 'Bruxelles', viewValue: 'Bruxelles'},
    {value: 'Anvers', viewValue: 'Anvers'}
  ];
  route_active: string;


  ngOnInit(): void {
    this.route_active =this.router.url
    this.checked =false;
   
  }

  

  setrouter(e){
    this.route_active = e;
    console.log(this.route_active)

  }
  chosenYearHandler_chart(normalizedYear_chart: Moment , datepicker_chart: MatDatepicker<Moment>) {
    const ctrlValue = this.date_chart.value;
    ctrlValue.year(normalizedYear_chart.year());
    this.date_chart.setValue(ctrlValue);
    datepicker_chart.close();
  }
}

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
import { DomSanitizer } from '@angular/platform-browser';
import { AccountService } from 'src/app/preference/services/account.service';
import { environment } from '../../../environments/environment.prod';
 @Component({
  selector: 'app-purchase-category',
  templateUrl: './purchase-category.component.html',
  styleUrls: ['./purchase-category.component.scss']
})
export class PurchaseCategoryComponent implements OnInit {
  url: any;
   
  activebutton: boolean =true ;
   

  constructor(private router: Router,public dialog: MatDialog,public accountService: AccountService) {

   }
   
 
  ngOnInit(): void {

    this.accountService.currentdataPurchase.subscribe(data=>{
      this.url =data
   
    
    })

  }

  openDialogFileUpload() {
    this.dialog.open(Category_fileUpload,{
   
      data: {
        animal: 'panda'
      },
      width: '50%',
      height: '60%',
      panelClass: 'my-custom-dialog-class'
    });
  
  }
  
}

var reader = new FileReader();
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'category_fileUpload',
  templateUrl: 'category_fileUpload.html',
  
  styleUrls: ['./purchase-category.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Category_fileUpload {
  url: any;
  urlActive: boolean;
  
 
  
  constructor(private router: Router, public dialogRef: MatDialogRef<Category_fileUpload>  ,public accountService:AccountService  ) {

   }
  
 
  
  ngOnInit(): void {
    console.log(this.url)
 
}
onSelectFile(event) { // called each time file input changes
    

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    console.log(event.target.files[0])

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target.result;
      this.accountService.urlPathPurchase.next(this.url.toString()) 
     
      
    }
  
  
  
}

validerbtn(event){

 
}
}
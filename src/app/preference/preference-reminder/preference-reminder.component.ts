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
import { AccountService } from '../services/account.service';

interface delai {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-preference-reminder',
  templateUrl: './preference-reminder.component.html',
  styleUrls: ['./preference-reminder.component.scss']
})
export class PreferenceReminderComponent implements OnInit {
  checked: boolean =true;
  valueCheckBox: HTMLElement;
  langue2: string;
  langueValue: string ='fr';
  showTradiction: boolean;
  checked1: boolean =true;
  checked2: boolean =true;
  checked3: boolean =true;
  checked4: boolean;
  constructor() { 

/*     //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }

    this.config = {
      itemsPerPage: 15,
      currentPage: 1,
      totalItems: this.collection.count
    }; */


  }

 /*  config: any;
  collection = { count: 60, data: [] };

  pageChanged(event){
    this.config.currentPage = event;
  } */
   campaignOne: FormGroup;
  campaignTwo: FormGroup;
 




  ngOnInit(): void {
    console.log(this.delai)
    
  }
  selectedValue1: string;
  delai: delai[] = [
    {value: '0', viewValue: 'Envoi automatique par courrier électronique1'},
    {value: '1', viewValue: 'Envoi automatique par courrier électronique2'},
    {value: '2', viewValue: 'Envoi automatique par courrier électronique3'}
  ];
  activeSection(e){
    console.log(e)
    if(e=='s4'){
  
      this.checked =true
      console.log(this.checked)
    }else if(e =='s5'){
 
      this.checked1 =true
      console.log(this.checked)
    }else if(e =='s6'){
 
      this.checked2 =true
      console.log(this.checked)
    }else if(e =='s7'){
 
      this.checked3 =true
      console.log(this.checked)
    }

  }

  desactiveSection(e){
    if(e=='s4'){
   
      this.checked =false
      console.log(this.checked)
    }else if(e =='s5'){
      
      this.checked1 =false
      console.log(this.checked)
    }else if(e =='s6'){
 
      this.checked2 =false
      console.log(this.checked)
    }else if(e =='s7'){
 
      this.checked3 =false
      console.log(this.checked)
    }
  }

  selectValue(e){
   
    console.log(e)
  }


  clickButton(e: string) {
  
    this.langue2  =  (<HTMLInputElement>document.getElementById('textLangue')).value;
  console.log(this.langue2)
     this.langueValue = e
    console.log(this.langueValue);
    this.showTradiction =true
  }
 
}

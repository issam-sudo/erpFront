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
@Component({
  selector: 'app-preference-reminder',
  templateUrl: './preference-reminder.component.html',
  styleUrls: ['./preference-reminder.component.scss']
})
export class PreferenceReminderComponent implements OnInit {
  checked: boolean =false;
  valueCheckBox: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  activeSection(){
    var element =(<HTMLInputElement>document.getElementById('s4')).value
  
    console.log(element)
    this.checked =true
    console.log(this.checked)
  }

}

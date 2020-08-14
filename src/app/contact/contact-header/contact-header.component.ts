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

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss']
})
export class ContactHeaderComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
   
  }
 
}

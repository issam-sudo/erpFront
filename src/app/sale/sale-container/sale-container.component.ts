
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
  selector: 'app-sale-container',
  templateUrl: './sale-container.component.html',
  styleUrls: ['./sale-container.component.scss']
})
export class SaleContainerComponent implements OnInit {

  route_active: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route_active =this.router.url
  }
  

  setrouter(e){
    this.route_active = e;
    this.router.navigate([this.route_active]) ;

  }


}
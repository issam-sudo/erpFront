 
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatDatepickerModule   } from '@angular/material/datepicker';
 import {  MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule,} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatIconModule , MatTableModule , MatSelectModule , MatCheckboxModule , MatBadgeModule ,MatMenuModule, MatButtonModule, MatSlideToggleModule]

})
export class SharedModule { }

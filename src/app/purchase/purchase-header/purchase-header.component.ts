import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Facture_fileUpload } from '../purchase-invoice/purchase-invoice.component';
import { AccountService } from 'src/app/preference/services/account.service';

@Component({
  selector: 'app-purchase-header',
  templateUrl: './purchase-header.component.html',
  styleUrls: ['./purchase-header.component.scss']
})
export class PurchaseHeaderComponent implements OnInit {
  route_active: string;
  url: any;
  constructor(private router: Router,public dialog: MatDialog,public accountService: AccountService) { }

  ngOnInit(): void {
    this.route_active =this.router.url
      
    this.accountService.currentdataPurchase.subscribe(data=>{
      this.url =data
      
   
    
    })
 
  }
  

  setrouter(e){
    this.route_active = e;
    console.log(this.route_active)
    this.router.navigate([this.route_active]).then(() => {
      window.location.reload();
    }); ;

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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-header',
  templateUrl: './purchase-header.component.html',
  styleUrls: ['./purchase-header.component.scss']
})
export class PurchaseHeaderComponent implements OnInit {
  route_active: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route_active =this.router.url
  }
  

  setrouter(e){
    this.route_active = e;
    console.log(this.route_active)
    this.router.navigate([this.route_active]).then(() => {
      window.location.reload();
    }); ;

  }
}

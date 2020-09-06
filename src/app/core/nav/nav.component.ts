import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  route_active: string ;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route_active =this.router.url
   //  this.path =this.router.url
  }

  //route activer
  setrouter(path){
    this.route_active = path;
    console.log(this.route_active)
    this.router.navigate([path]).then(() => {
      window.location.reload();
    });
    
  }

}

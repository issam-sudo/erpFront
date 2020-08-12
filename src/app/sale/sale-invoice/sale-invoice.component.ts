import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedModule} from '../../shared/shared.module'
import { Router } from '@angular/router';
import {Chart} from 'node_modules/chart.js';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { analyzeAndValidateNgModules } from '@angular/compiler'


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const elemnt: any[] = [
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},
  {facture: 'k258639',date :'20/05/2020', client:'Youssef Hjije', montant:'90000'},

]

@Component({
  selector: 'app-sale-invoice',
  templateUrl: './sale-invoice.component.html',
  styleUrls: ['./sale-invoice.component.scss']
})
export class SaleInvoiceComponent implements OnInit {

  isClients: boolean;
  route_active: string;
  displayedColumns: string[] = ['act','facture', 'date', 'client', 'montant','status', 'financement','action'];
  dataSource = elemnt;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  //ii: any[]=[{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"} ,{facture:"k258639",date:"21/12/2020"}  ];
  constructor(private router: Router) { }

  // sel: any[]= [1,2,3,4,5,6,7,9,10,11,12,14,15,16,17,18,19,20,21,22,30]

  


  ngOnInit(): void {
    this.getChart();
    this.getChart1();
    this.route_active = this.router.url;


   }


   


  async getChart(){

    // tslint:disable-next-line:prefer-const
    let ctx = document.getElementById('myChart');
    // tslint:disable-next-line:prefer-const
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Fev', 'Mar' , 'Apr', 'May', 'Jun', 'Jul' , 'Out' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
          datasets: [{
              label: 'Achat',
              data: [60, 150, 200 , 260, 278 , 280 , 500 , 200 , 366 , 390 , 420 , 550],
              backgroundColor: [
                'rgb(245, 89, 82 ,0)',


              ],
              borderColor: [
                'rgb(245, 89, 82 ,1)',


              ],
              borderWidth: 1,
              pointStyle: 'circle',
              pointRadius: '5',
              pointBackgroundColor: 'white',
              pointBorderColor: 'rgb(245, 89, 82 ,1)'
          }
        ]
      },
      options: {
        tooltips: {
          yAlign: 'bottom',

  backgroundColor: 'rgb(50, 61, 65)'
      },
        layout: {
          padding: {
              left: 10,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        legend: {
          display: true,
          position: 'left',
          align: 'start',

          labels: {
            pointBackgroundColor: 'red',
            usePointStyle: true,


          }
      },
          scales: {

            xAxes: [{
              ticks: {
                padding: 30
              },
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,

              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      display: false,


                  },
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                  }
              }]
          }
      }
  });
  
  }


  async getChart1(){

    // tslint:disable-next-line:prefer-const
    let ctx = document.getElementById('myChart1');
    // tslint:disable-next-line:prefer-const
    let myChart1 = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Fev', 'Mar' , 'Apr', 'May', 'Jun', 'Jul' , 'Out' , 'Sep' , 'Oct' , 'Nov' , 'Dec'],
          datasets: [{
              label: 'Achat',
              data: [60, 150, 200 , 260, 278 , 280 , 500 , 200 , 366 , 390 , 420 , 550],
              backgroundColor: [
                'rgb(245, 89, 82 ,0)',


              ],
              borderColor: [
                'rgb(245, 89, 82 ,1)',


              ],
              borderWidth: 1,
              pointStyle: 'circle',
              pointRadius: '5',
              pointBackgroundColor: 'white',
              pointBorderColor: 'rgb(245, 89, 82 ,1)'
          }
        ]
      },
      options: {
        tooltips: {
          yAlign: 'bottom',

  backgroundColor: 'rgb(50, 61, 65)'
      },
        layout: {
          padding: {
              left: 10,
              right: 0,
              top: 0,
              bottom: 0
          }
      },
        legend: {
          display: true,
          position: 'left',
          align: 'start',

          labels: {
            pointBackgroundColor: 'red',
            usePointStyle: true,


          }
      },
          scales: {

            xAxes: [{
              ticks: {
                padding: 30
              },
              gridLines: {
                display: false,
                drawOnChartArea: false,
                drawTicks: false,

              }
            }],
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      display: false,


                  },
                  gridLines: {
                    display: false,
                    drawOnChartArea: false,
                    drawTicks: false
                  }
              }]
          }
      }
  });
  


   }

  

   setrouter(e){
    this.route_active = e;
    console.log(this.route_active)
    this.router.navigate([e]);
  }

}
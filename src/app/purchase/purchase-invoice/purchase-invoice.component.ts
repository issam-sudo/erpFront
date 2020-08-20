import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {Chart} from 'node_modules/chart.js';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { Moment} from 'moment';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {
  date:Date =new Date()
 mois:any = this.date.toLocaleDateString(undefined,{  month: 'long' })
  constructor() { }

  ngOnInit(): void {
    this.getChart()
    console.log(this.date)
  
    
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
              fill: false,
              data: [60 , 150, 200 , 260, 278 , 280 , 300 , 200 , 366 , 390 , 420 , 250],
              backgroundColor: [
                'rgb(245, 89, 82 ,0)',


              ],
              borderColor: [
                'rgb(245, 89, 82 ,1)',


              ],
              borderWidth: 1,
              pointStyle: 'circle',
              pointRadius: '5',
              pointBackgroundColor: 'rgb(245, 89, 82 ,1)',
              pointBorderColor: 'rgb(245, 89, 82 ,1)'
          } 
        ]
      },
      options: {
        tooltips: {
          custom(tooltip) {
            if (!tooltip) { return; }
            // disable displaying the color box;
            tooltip.displayColors = false;
          },
          callbacks: {
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }, label(tooltipItem, data) {
              return data.datasets[tooltipItem.datasetIndex].label + ':' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '€';

            },


          },

          yAlign: 'bottom',
          backgroundColor: 'rgb(50, 61, 65)',

      },
        layout: {
          padding: {
              left: 0,
              right: 0,
              top: 40,
              bottom: 0
          },

      },
        legend: {
          display: true,
          position: 'left',
          align: 'start',

          labels: {

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
}

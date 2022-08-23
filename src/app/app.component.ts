import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ILoadedEventArgs, ChartComponent, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
/**
 * Sample for Column Series
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    public data: Object[] =[
 
{ year:'2000', gold: 25, silver: 25 }, { year: '2001', gold: 20, silver: 20 },
 
{ year:'2002', gold: 21, silver: 21 }, { year: '2003', gold:15 , silver: 15 },
 
{ year:'2004', gold: 30, silver: 30 }
 
];
public data2: Object[] =[
 
    { year:'2000', gold: 35, silver: 25 }, { year: '2001', gold: 28, silver: 20 },
     
    { year:'2002', gold: 34, silver: 21 }, { year: '2003', gold: 32, silver: 15 },
     
    { year:'2004', gold: 40, silver: 30 }
     
    ];
public marker1: Object = { dataLabel: { visible: true, position: 'Top', },  }
    public title: string = 'Olympic Medal Counts - RIO';
    public tooltip: Object = {
        enable: true
    };
    public marker2: Object = { dataLabel: { visible: true, position: 'Top', },visible:true  }
    
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category', 
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
         
    };
     public legendSettings: Object={
         visible:true
     }
    
    
      // custom code start
    
      // custom code end
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public width: string = Browser.isDevice ? '100%' : '60%';

    constructor() {
        //code
    };

}
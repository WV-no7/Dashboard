import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  data;
  metaData;
  chart:any;

  constructor(private http:Http, private AmCharts: AmChartsService, private utils: UtilsService) {
  }

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this.afterAssignData();
      console.log(this.data);
    });

    this.metaData = this.utils.metaData;
  }

  afterAssignData() {
    if(this.data) {
      this.metaData["dataProvider"].push({
        "category": "Collections",
        "column-1": parseInt(this.data["Lead Agent"]["Real Misses No"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Real Misses No"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Real Misses No"]["Mar-17"]),
      })

      this.metaData["dataProvider"].push({
        "category": "Sales",
        "column-1": parseInt(this.data["Lead Agent"]["Sales No"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Sales No"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Sales No"]["Mar-17"]),
      })

      this.metaData["dataProvider"].push({
        "category": "New Customers",
        "column-1": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Mar-17"]),
      })

      this.chart = this.AmCharts.makeChart("chartdiv", this.metaData);
    }
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}

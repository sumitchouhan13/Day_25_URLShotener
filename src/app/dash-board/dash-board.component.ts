import { Component, OnInit } from '@angular/core';
import { UrlServiceService } from '../url-service.service';
import { chartModal } from '../urlChartModal';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  single: Array<chartModal> = [];
  temp: Array<chartModal> = [];

  totalLink: number = 0;
  totalClicks: number = 0;
  view: [number, number] = [700, 350];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'URL Id';
  showYAxisLabel = true;
  yAxisLabel = 'Number Of Clicks';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  constructor(private urlService: UrlServiceService) {
    this.urlService.getAllUrl().subscribe((data) => {
      data.forEach((innerData) => {
        let id = innerData.shortUrl;
        this.temp.push({
          name: id.toString(),
          value: innerData.count,
        });
      });
      this.single = this.temp;
    });
  }

  ngOnInit(): void {
    this.urlService.getAllUrl().subscribe((data) => {
      this.totalLink = data.length;
      let count = 0;
      data.forEach((obj) => {
        count += obj.count;
      });
      this.totalClicks = count;
    });
  }
}

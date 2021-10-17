import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UrlServiceService } from '../url-service.service';
import { URL } from '../URLModal';

@Component({
  selector: 'app-total-url',
  templateUrl: './total-url.component.html',
  styleUrls: ['./total-url.component.css'],
})
export class TotalUrlComponent implements OnInit {
  urlList: Array<URL> = [];
  count: number = 0;
  constructor(private urlService: UrlServiceService, private router: Router) {
    this.loadData();
  }

  ngOnInit(): void {}

  loadData() {
    this.urlService.getAllUrl().subscribe((data) => {
      this.urlList = data;
    });
  }

  deleteUrl(id?: number) {
    this.urlService.deleteUrlById(id).subscribe((data) => {
      this.loadData();
    });
  }

  registerCount(id?: number) {
    this.urlService.getUrlById(id).subscribe((data) => {
      this.count = data.count;
      ++this.count;
      data.count = this.count;
      // console.log(data.count);
      this.urlService.updateUrl(data, id).subscribe(() => {
        this.loadData();
      });
    });
  }
}

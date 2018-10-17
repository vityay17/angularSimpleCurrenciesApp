import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resourceUrl = 'http://www.apilayer.net/api/live?access_key=b5306030542bc99e9bfced57f6b6bf0c';
  list: {name, value}[] = [];
  waluta = 'USD';

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http.get<{quotes}>(this.resourceUrl, {observe: 'response' })
      .subscribe(res => {
        Object.keys(res.body.quotes).forEach((item) => {
            this.list.push({name: item, value: (res.body.quotes)[item]});
        });
      });
  }

}

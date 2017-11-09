import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
  jurl = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK';
  list = [];
  postUrl = 'http://localhost:3000/dologin';

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, private jsonp: Jsonp) {
  }

  ngOnInit() {
    this.requestJsonpData();
  }
  requestData() {
    let _that = this;
    this.http.get(this.url).map(res => res.json()).subscribe(function (data) {
      // console.log(data);
      _that.list = data.result;
      // console.log(_that.list);
    }, function (err) {
      console.log(err);
    });
  }

  requestJsonpData() {
    let _that = this;
    this.jsonp.get(this.jurl).map(res => res.json()).subscribe(function (data) {
      // console.log(JSON.parse(data['_body']));
      _that.list = data.result;
      // console.log(_that.list);
    }, function (err) {
      console.log(err);
    });
  }

  postData() {
    this.http.post(this.postUrl, JSON.stringify({'username': ''}), {headers: this.headers}).map(res => res.json()).subscribe(function(data) {
      console.log(data);
    }, function(err) {
      console.log(err);
    });
  }


}

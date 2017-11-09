import { Component, OnInit } from '@angular/core';
import { Http, Jsonp, Headers } from '@angular/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
  jurl = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSONP_CALLBACK';
  list = [];
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, private jsonp: Jsonp) {
  }

  ngOnInit() {
  }
  requestData() {
    let _that = this;
    this.http.get(this.url).subscribe(function (data) {
      // console.log(JSON.parse(data['_body']));
      _that.list = JSON.parse(data._body).result;
      console.log(_that.list);
    }, function (err) {
      console.log(err);
    });
  }

  requestJsonpData() {
    let _that = this;
    this.jsonp.get(this.jurl).subscribe(function (data) {
      // console.log(JSON.parse(data['_body']));
      _that.list = data._body.result;
      console.log(_that.list);
    }, function (err) {
      console.log(err);
    });
  }

  postData() {

  }
}

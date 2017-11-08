import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  title = 'news';
  msg: any;
  msg1: string = '这是string类型';
  public username = 'shawn';
  list= ['1111', '2222', '3333'];
  constructor() {
    this.msg = '<h2>this is msg, 另一个钟定义属性的方法</h2>';
  }

  ngOnInit() {
  }

}

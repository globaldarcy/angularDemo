import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() msg: string;
  /* 构造函数 */
  constructor() { }
  /* 生命周期函数 加载触发的方法 */
  ngOnInit() {
  }

}

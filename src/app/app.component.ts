import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* 表示使用组件的名称 */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { /* 数据 */
  title = 'app';
  desc = 'Hello Angular!';
}

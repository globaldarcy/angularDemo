import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
@Component({
  selector: 'app-root', /* 表示使用组件的名称 */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { /* 数据 */
  title = 'app';
  desc = 'Hello Angular!';
  constructor(private router: Router){}
  goShop(id, aid) {
    let navgationExtras: NavigationExtras = {
      queryParams: {'id': id, 'aid': aid},
      fragment: 'blank'
    };
    this.router.navigate(['/shop'], navgationExtras);
  }
}

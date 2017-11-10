import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(function (data) {
      console.log(data.id);
    });
  }

}

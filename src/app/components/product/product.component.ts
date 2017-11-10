import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('cartFn') cart2;
  constructor() { }

  ngOnInit() {
  }

  getChild() {
    // this.cart2.run2();
    // alert(this.cart2.msg);
    this.cart2.msg = 'change data';
  }
}

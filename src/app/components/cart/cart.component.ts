import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  msg = 'cart data 2';
  constructor() { }

  ngOnInit() {
  }

  run() {
    alert('这是购物车组件');
  }
  run2() {
    alert(this.msg);
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class New2Component implements OnInit {
  msg = '这是新闻组件的msg';

  constructor() { }

  ngOnInit() {
  }

}

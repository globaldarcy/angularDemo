import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(function (data) {
      console.log(data.id);
    });
  }

}

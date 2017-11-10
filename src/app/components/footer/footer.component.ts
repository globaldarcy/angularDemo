import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  @Input() msg: string;
  @Input() run: object;
  @Input() search;
  @Input() parent;
  public childInfo = '子组件的数据';
  @Output() toParent = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  childFn() {
    this.parent(this.childInfo);
  }
  foo () {
    this.toParent.emit('Child Data');
  }


}

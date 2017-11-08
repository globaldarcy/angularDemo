import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-todulist',
  templateUrl: './todulist.component.html',
  styleUrls: ['./todulist.component.css']
})
export class TodulistComponent implements OnInit {
  username = '';
  list: any;
  arr: any;
  obj = {};
  todoList: any;
  // storage = new StorageService;
  constructor(private storage: StorageService) {
    // this.username = '';
    this.list = [];
    this.arr = [];
    this.todoList = this.storage.getItem('username');
  }

  ngOnInit() {
    if (this.storage.getItem('username')) {
      this.list = this.storage.getItem('username');
    }
  }

  addData(e) {
    if (e.keyCode === 13) {
      this.obj = {
        username: this.username,
        status: true
      };
      if (this.todoList) {
        this.todoList.push(this.obj);
        this.storage.setItem('username', this.todoList);
      } else {
        this.arr.push(this.obj);
        this.storage.setItem('username', this.arr);
      }
      this.list.push(this.obj);
      this.username = '';
    }
  }

  delData(key) {
    this.list.splice(key, 1);
    this.storage.setItem('username', this.list);
  }

  changeData(key) {
    this.list[key].status = !this.list[key].status;
    this.storage.setItem('username', this.list);
  }

}

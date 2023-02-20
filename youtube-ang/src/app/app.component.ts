import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'youtube-ang';
  // date = new Date();
  // constructor() {
  //   console.log('constructor called');
  //   this.doSomething('HELLO HELLO');
  // }
  // doSomething(value: string): void {
  //   console.log('Awesome', value);
  // }

  title = 'PROJECT CC';
  todoValue: string;
  list: Todo[];

  ngOnInit() {
    //! this method is called when the component is initialized
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== '') {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem); // push it to the array
    }
    this.todoValue = ''; // clear the input
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}

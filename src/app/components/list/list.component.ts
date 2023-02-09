import { Component, Input } from '@angular/core';
import { ToDoItem } from 'src/app/store/to-do.state';

@Component({
  selector: 'td-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  items: ToDoItem[] = []
}

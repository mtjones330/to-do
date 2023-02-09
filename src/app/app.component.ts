import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { Fireworks } from 'fireworks-js'
import { AddToDo, ToDoItem, ToDoState } from './store/to-do.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'to-do';

  state$: Observable<ToDoState>;
  items$: Observable<ToDoItem[]> = of([]);

  constructor(private store: Store) {
    this.state$ = this.store.select(state => state);
    this.items$ = this.store.select(state => state.todo.items);
  }

  ngOnInit(): void {
    this.items$.subscribe(items => {


      const completedToDos = items.filter((x: any) => x.complete === true);

      if (items.length === completedToDos.length) {
        const body = document.querySelector('body') as any;
        body.style.backgroundColor = 'black';

        const container = document.querySelector('#congratulations') as any
        container.style.backgroundColor = 'black';

        const fireworks = new Fireworks(container)
        fireworks.updateSize({ width: window.outerWidth, height: window.outerHeight });
        fireworks.start()
      }
    })
  }

  onAdd = (description: string) => {
    this.store.dispatch(new AddToDo(description));
  }
}

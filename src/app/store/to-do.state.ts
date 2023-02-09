import { Injectable } from "@angular/core"
import { Action, State, StateContext } from "@ngxs/store"

export interface ToDoItem {
  id: number,
  description: string,
}

export interface ToDoModel {
  items: ToDoItem[]
}

export class AddToDo {
  static readonly type = '[To Do] Add'

  constructor(public description: string) {}
}

@State<ToDoModel>({
  name: 'todo',
  defaults: {
    items: [{
      id: 1,
      description: 'Add checkbox to complete to do item',
    }, {
      id: 2,
      description: 'Display completed progress to the users',
    }]
  }
})
@Injectable()
export class ToDoState {

  @Action(AddToDo)
  addToDo(ctx: StateContext<ToDoModel>, action: AddToDo) {

    const state = ctx.getState();

    ctx.setState({
      ...state,
      items: [...state. items, { id: state.items.length + 1, description: action.description }]
    });
  }
}

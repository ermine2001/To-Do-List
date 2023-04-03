import { Component } from '@angular/core';
import {todolist} from "./todolist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title = 'todolist';
  todos : todolist[] = [];
  newTodo : string;

  savetodo(){
if(this.newTodo)
{
  let todo = new todolist();
  todo.name = this.newTodo;
  todo.isDone = false;
  this.todos.push(todo);
  this.newTodo ='';
}
else
{
  alert("Wpisz zadanie")
}
  }


  done(id:number){

    if(this.todos[id].isDone ==false)
    {
      this.todos[id].name += '  -   ✓' ;
      this.todos[id].isDone =true;
    }

    //localStorage.setItem(JSON.stringify(id), JSON.stringify(this.newTodo));

  }

  delete(id:number){
    this.todos = this.todos.filter(( v,i) => i != id);
  }
}

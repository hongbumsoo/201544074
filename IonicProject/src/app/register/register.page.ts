import { Todo, TodoService } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  todos: Todo[];
  //username:string;
  //password:string;
  //repassword:string;

  constructor(private todoService: TodoService) {  }


  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos=res;
    })
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
  }
  //register(){
  //  if(this.username == null ||this.password == null ||this.repassword== null){
   //   alert("빈칸없이 입력해주세요!");
   // }
  // }
}

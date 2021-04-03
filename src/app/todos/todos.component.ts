import { Component, OnInit } from '@angular/core';
import { Albums } from '../modules/albums';
import { Todos } from '../modules/todos';
import { ApiRestService } from '../service/api-rest.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosData: Albums;

  constructor(
    public apirestService: ApiRestService) { }

  ngOnInit(): void {
    this.getAllTodos(); 
  }

  getAllTodos() {
    this.apirestService.getToDos().subscribe(response => {
      console.log(response);
      this.todosData = response;
    })
  }

}

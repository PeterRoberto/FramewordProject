import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Posts } from '../modules/posts';
import { Albums } from '../modules/albums';
import { Todos } from '../modules/todos'; 
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})  

export class ApiRestService {


  // API path
  url = 'https://jsonplaceholder.typicode.com';

  posts = '/posts/';
  albums = '/albums/';
  todos = '/todos/';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // API erros
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Se ocorrer um erro no client-side ou com a internet
      console.error('An error occurred:', error.error.message);
    } else {
      // O backend não retornou os dados com sucesso
      console.error(
        `Backend retornou ${error.status}, ` +
        `Mensagem de erro: ${error.error}`);
    }
    // Retorna o observable com a mensagem de erro
    return throwError(
      'Algo de errado acontececu, tente novamente mais tarde');
  };
 
  
 
  // Get dados dos posts
  getPosts(): Observable<Posts> {
    return this.http
      .get<Posts>(this.url + this.posts)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

    // Get dados dos albums 
    getAlbums(): Observable<Albums> {
      return this.http
        .get<Albums>(this.url + this.albums)
        .pipe(
          retry(1),
          catchError(this.handleError)
        ) 
    }

    // Get dados dos Todos
    getToDos(): Observable<Todos> {
      return this.http
        .get<Todos>(this.url + this.todos)
        .pipe(
          retry(1),
          catchError(this.handleError)
        )
    }


}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  
  public getTarefas(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos")
  }
}

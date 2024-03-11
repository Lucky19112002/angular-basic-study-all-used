import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): string[] 
  {
    return ['John', 'Alice', 'Bob'];
  }
}

import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    this.loadState();
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  admins:any[]=[
    {
      'email':'dixita@gmail.com',
       'password':'dixita123'
    }
  ]
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
  login({ email, password }: any): Observable<any> {
    for(let i=0;i<this.admins.length;i++)
    if (email == this.admins[i].email && password == this.admins[i].password) {
      this.setToken(email);
      return of({ email ,password});
    }
    return throwError(new Error('Failed to login'));
  }
  loadState(){
    try{
      const todoInStorage=JSON.parse(localStorage.getItem('users')|| '{}');
    if(!todoInStorage) return;
    this.admins.length=0;
    this.admins.push(...todoInStorage);
    }
    catch(e){
      console.log("something is wrong");
      console.log(e);
      
      
    }
  }
}

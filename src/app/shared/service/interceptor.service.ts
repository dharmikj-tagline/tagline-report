import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  get accessToken(){
    return localStorage.getItem('token') || null;
  }
}

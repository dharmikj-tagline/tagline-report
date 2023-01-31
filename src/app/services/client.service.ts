import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  postId: any;
  constructor(private http: HttpClient) {
    const token=localStorage.getItem('token');
  }

  sendJSON(): Observable<any> {
    return this.http.get('./../../assets/db.json');
  }

  removeJSON(id: any): Observable<any> {
    return this.http.delete(`./../../assets/db.json/` + id);
  }

  dataGet(): Observable<any> {
    return this.http.get(`${environment.apiURL}users`);
  }

  dataPost(user: any): Observable<any> {
    return this.http.post(environment.apiURL + `users`, user);
  }

  // dataPost(user: any): Observable<any> {
  //   return this.http.post(environment.apiURL + `users`, user).pipe(tap((res:any)=>{
  //     localStorage.setItem['token',res.data.token];
  //   }));
  // }

  dataDelete(id: any): Observable<any> {
    return this.http.delete(environment.apiURL + `users/` + id);
  }

  dataUpdate(user: any): Observable<any> {
    return this.http.put(environment.apiURL + `users/` + user.id, user);
  }
}

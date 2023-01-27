import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  postId: any;
  constructor(private http: HttpClient) {}

  
  sendJSON(){
    return this.http.get('./../../assets/db.json');
  }

  removeJSON(id:any){
    return this.http.delete(`./../../assets/db.json/`+id);
  }

  dataGet(): Observable<any> {
    return this.http.get(environment.apiURL + `users`);
  }

  dataPost(user: any): Observable<any> {
    return this.http.post(environment.apiURL + `users`, user);
  }

  dataDelete(id: any):  Observable<any> {
    return this.http.delete(environment.apiURL + `users/` + Option);
  }

  dataUpdate(user:any):  Observable<any> {
    return this.http.put(environment.apiURL + `users/`+ user.id , user);
  }

}

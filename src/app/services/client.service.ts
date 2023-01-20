import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  postId: any;
  constructor(private http: HttpClient) {}

  getPosts(): any {
    return this.http.get(environment.apiURL + `users`);
  }

  dataPost(user: any): any {
    const headers = new HttpHeaders().append('Authorization', 'my-auth-token').append('Content-Type', 'application/json');
    return this.http.post(environment.apiURL + `users`, user, {headers} );
  }

  dataDelete(id: any): any {
    return this.http.delete(environment.apiURL + `users/` + id);
  }

  dataUpdate(id: any): any {
    return this.http.put(environment.apiURL + `users/` + id, Option);
  }

}

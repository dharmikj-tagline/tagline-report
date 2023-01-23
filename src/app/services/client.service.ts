import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  postId: any;
  productsUrl = 'api/products';

  constructor(private http: HttpClient) {}

  // getProduct() : any{
  //   return this.http.get(this.productsUrl);
  // }

  dataGet(): any {
    return this.http.get(environment.apiURL + `users`);
  }

  dataPost(user: any): any {
    // const headers = new HttpHeaders().append('Authorization', 'my-auth-token').append('Content-Type', 'application/json');
    // return this.http.post(environment.apiURL + `users`, user, {headers} );
    return this.http.post(environment.apiURL + `users`, user);

  }

  dataDelete(id: any): any {
    return this.http.delete(environment.apiURL + `users/` + id);
  }

  dataUpdate(id: any): any {
    return this.http.put(environment.apiURL + `users/` + id, Option);
  }

}

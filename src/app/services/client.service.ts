import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  getPosts():any {
    return this.http.get(environment.apiURL + `JSGund/XHR-Fetch-Request-JavaScript/posts`);
  }

  user:User[]=[
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: 1111111111,
    },
    {
      id: 2,
      name: "Karan Graham",
      email: "karane@april.biz",
      phone: 222222222,
    },
    {
      id: 3,
      name: "Gel Graham",
      email: "gel@april.biz",
      phone: 3333333333,
    },
    {
      id: 4,
      name: "vishal Graham",
      email: "vishal@april.biz",
      phone: 4444444444,
    },
    {
      id: 5,
      name: "krut Graham",
      email: "krut@april.biz",
      phone: 5555555555,
    },
  ];

  shows=[
    {
      "id": "123f9165-80a2-41d8-997a-aecc0bfb2e22",
      "modified": "2017-08-13 15:54:47",
      "name": "Main Show1"
    },
    {
      "id": "456f9165-80a2-41d8-997a-aecc0bfb2e22",
      "modified": "2017-08-14 15:54:47",
      "name": "Main Show2"
    },
    {
     "id": "789f9165-80a2-41d8-997a-aecc0bfb2e22",
      "modified": "2017-08-17 15:54:47",
      "name": "Main Show3"
    }
  ]
}

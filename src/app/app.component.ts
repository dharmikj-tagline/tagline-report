import { Component } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline-report';
  users:any;

  constructor(private client : ClientService) {
    this.client.getPosts().subscribe((res:any) => {
      console.log('res :>> ', res);
      this.users=res;
      console.log('this.users :>> ', this.users);
    })
  }
}

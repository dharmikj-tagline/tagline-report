import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.scss']
})
export class DatasComponent implements OnInit {

  cards:any;

  constructor(private client: ClientService) {
    this.client.sendJSON().subscribe((res:any)=>{
      this.cards=res;
      console.log('this.cards :>> ', this.cards);
    });
   }

  ngOnInit(): void {
  }

  removeCard(data:any){
    this.client.removeJSON(data).subscribe((res:any)=>{
      console.log('Card Delete :>> ', res);
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User,Company,Geo,Address } from './common';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline-report';
  form!:FormGroup;
  // products!:any
  private userId!:number
  users!: any;

  constructor(private client: ClientService,private fb:FormBuilder) {
    this.client.dataGet().subscribe((res: any) => {
      this.users = res;
      console.log('this.users :>> ', this.users);
    });

    this.form=this.fb.group({
      name : [''],
      username:[''],
      email : [''],
      address:this.fb.group({
        street:[''],
        city:[''],
        zipcode:['']
      }),
      phone:[''],
      website:[''],
      company:this.fb.group({
        cname : ['']
      })
    });

  }

  // ngOnInit(){
  //   this.getSoftProduct();
  // }

  // getSoftProduct(){
  //   this.client.getProduct().subscribe((res:any)=>{
  //     console.log('res :>> ', res);
  //   })
  // }

  saveUser() {
    this.client.dataPost(this.form.value).subscribe((response: any) => {
      if(this.userId){
        const index: number = this.users.findIndex(
          (res: any) => res.id === this.userId
        );

        this.users[index] = {
          id:this.userId,
          ...response
        };
      }
      else{
        const data={
          id:this.users.length+1,
          ...response
        }
      this.users.push(data);

      }
      console.log('this.users Pushed Value :>> ', this.users);
    });
    this.form.reset();
  }

  deleteRec(i:any,data:any){
    this.client.dataDelete(i).subscribe((response: any) => {
      this.users.splice(i,1);
      console.log('Deleted id :>> ', data.id);
    });
  }

  updateRec(data:any){
    this.form.patchValue(data);
    this.userId=data.id;
    this.client.dataUpdate(data.id).subscribe((response: any) => {
      console.log('update Data :>> ', data);
    });
  }

}

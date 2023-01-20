import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline-report';
  form!:FormGroup;
  userId!:number
  users: any;

  constructor(private client: ClientService,private fb:FormBuilder) {
    this.client.getPosts().subscribe((res: any) => {
      console.log('res :>> ', res);
      this.users = res;
      console.log('this.users :>> ', this.users);

      this.form=this.fb.group({
        name : [''],
        username:[''],
        email : [''],
      });

    });

    // this.client.dataPost().subscribe((res: any) => {
    //   this.users.push(res);
    //   console.log('res :>> ', res);
    //   this.users.push(this.form.value);
    //   console.log('this.users :>> ', this.users);

    //   });

    
    // this.client.postData().subscribe((res: any) => {
    //   console.log('res :>> ', res);
    //   this.users.push(res);
    //   console.log('this.users :>> ', this.users);
    // });
  }

  saveUser() {
    this.client.dataPost(this.form.value).subscribe((response: any) => {
      console.log('NAme VAlue :>> ', response.name);
      if(this.userId){
        const index: number = this.users.findIndex(
          (res: any) => res.id === this.userId
        );

        this.users[index] = {
          id:this.userId,
          name:response.name,
          username:response.username,
          email:response.email,
        };
      }
      else{
        const data={
          id:this.users.length+1,
          name:response.name,
          username:response.username,
          email:response.email,
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

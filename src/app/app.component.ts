import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
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
  searchText:any
  private userId!:number
  users!: any;

  constructor(private client: ClientService,private fb:FormBuilder) {

    // const myObservable = of(1, 2, 3);
    // const myObserver = {
    //   next: (x: number) => console.log('Observer got a next value: ' + x),
    //   error: (err: Error) => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };
    // myObservable.subscribe(myObserver);


    // const vowels = new Observable(observer => {
    //   const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    //   for (let letter of vowels) {
    //     observer.next(letter);
    //   }
    //   observer.complete();
    // });

    // vowels.subscribe({  
    //   next: x => console.log('The next vowel is: ', x),  
    //   error: err => console.error('An error occurred', err),  
    //   complete: () => console.log('There are no more vowels.')  
    // });

    
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

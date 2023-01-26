import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User, Company, Geo, Address } from './common';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline-report';
  form!: FormGroup;
  formerr!: string;
  // products!:any
  searchText: any;
  private userId!: number;
  users!: any;

  constructor(private client: ClientService, private fb: FormBuilder,private toastrService: ToastrService) {
    this.client.dataGet().subscribe((res: any) => {
      this.users = res;
      console.log('this.users :>> ', this.users);
    });

    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: [''],
    });
  }


  get formControls() {
    return this.form.controls;
  }

  saveUser() {
    if (this.form.invalid) {
      this.formerr = 'Please fill the form Correctly';
      return;
    } 
    else {
      if (this.userId) {
        const index: number = this.users.findIndex(
          (res: any) => res.id === this.userId
        );

        const data = {
          id: this.userId,
          ...this.form.value,
        };
  
        this.client.dataPost(data).subscribe((res:any)=>{
         console.log('data :>> ', data);
          this.users[index]= {
            ...res
          };
        })
      } else {
        const data = {
          id: this.users.length + 1,
          ...this.form.value,
        };
        this.client.dataPost(data).subscribe((res:any)=>{
          console.log('Data Post Calles :>> ');
          this.users.push(res);
        })
      }
      this.form.reset();
    }
    this.toastrService.success('Message Success!', 'Record Done!');
  }

  deleteRec(i: any, data: any) {
    this.client.dataDelete(i).subscribe((response: any) => {
      this.users.splice(i, 1);
      console.log('Deleted id :>> ', data.id);
    });
    this.toastrService.success('Message Success!', 'Record Deleted!');
  }

  updateRec(data: any) {
    this.form.patchValue(data);
    this.userId = data.id;
  }

}

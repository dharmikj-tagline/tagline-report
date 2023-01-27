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
  lblAddUser:string='Add USer'
  lblUserData:string='User Data'
  lblName:string='Name :'
  lblUsername:string='Username :'
  lblEmail:string='Email :'
  lblPhone:string='Phone :'
  lblWebsite:string='Website :'

  errName:string='Name is Required'
  errUsername:string='Username is Required'
  errEmail:string='Email is Required'
  errPhone:string='Phone is Required'
  errWebsite:string='Website is Required'


  form!: FormGroup;
  submitted:boolean=false
  searchText: any;
  private userId!: number;
  users!: any;

  btnSubmit:string='Submit'

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.getData();

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

  getData(){
    this.client.dataGet().subscribe((res: any) => {
      this.users = res;
      console.log('this.users :>> ', this.users);
    });
  }

  saveUser() {
    if (this.form.invalid) {
      this.submitted=true
      return;
    } else {
      this.submitted=false;
      this.btnSubmit='Submit'
      if (this.userId) {
        
        const index: number = this.users.findIndex(
          (res: any) => res.id === this.userId
        );

        const data = {
          id: this.userId,
          ...this.form.value,
        };

        this.client.dataPost(data).subscribe((res: any) => {
          this.users[index] = {
            ...res,
          };
        });
        this.toastrService.info('Record has been Updated', ' Updated!');
      } else {
        const data = {
          id: this.users.length + 1,
          ...this.form.value,
        };
        this.client.dataPost(data).subscribe((res: any) => {
          this.users.push(res);
        });
        this.toastrService.success('Record has been Created!', 'Created');
      }
      this.form.reset();
    }
  }

  deleteRec(i: any, data: any) {
    this.client.dataDelete(i).subscribe((response: any) => {
      this.users.splice(i, 1);
    });
    this.toastrService.error('Record has been deleted!', 'Deleted!');
  }

  updateRec(data: any) {
    this.btnSubmit='Update'
    this.form.patchValue(data);
    this.userId = data.id;
  }
}

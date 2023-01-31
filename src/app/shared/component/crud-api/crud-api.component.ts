import {  OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/common';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-crud-api',
  templateUrl: './crud-api.component.html',
  styleUrls: ['./crud-api.component.scss']
})
export class CrudApiComponent implements OnInit {

  lblAddUser: string = 'Add USer';
  lblUserData: string = 'User Data';
  lblName: string = 'Name :';
  lblUsername: string = 'Username :';
  lblEmail: string = 'Email :';
  lblPhone: string = 'Phone :';
  lblWebsite: string = 'Website :';
  btnSubmit: string = 'Submit';

  errName: string = 'Name is Required';
  errUsername: string = 'Username is Required';
  errEmail: string = 'Email is Required';
  errPhone: string = 'Phone is Required';
  errWebsite: string = 'Website is Required';

  form!: FormGroup;
  submitted: boolean = false;
  private userId!: number;
  deleteId!: number;
  users!: User[];
  userObservable!:User[];

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private httpClient: HttpClient
  ) {
    this.getData();
  }

  ngOnInit(){
    this.formLoad()
  }

  formLoad(){
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

  getData() {
    this.client.dataGet().subscribe((res : User[])=>{
      this.users = res;

      let observeData=new Observable((observe:any)=>{
        observe.next(this.users);
        observe.complete()
        return {unsubscribe() {}};
      })
      observeData.subscribe((res:any)=>{
        console.log('New res :>> ', res);
        this.userObservable=res
      })
    })

  }
  

  saveUser() {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    } else {
      this.submitted = false;
      this.btnSubmit = 'Submit';
      if (this.userId) {
        const index: number = this.users.findIndex(
          (res: any) => res.id === this.userId
        );

        const data = {
          id: this.userId,
          ...this.form.value,
        };

        this.client.dataUpdate(data).subscribe((res: User) => {
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
        this.client.dataPost(data).subscribe((res: User) => {
          this.users.push(res);
        });
        this.toastrService.success('Record has been Created!', 'Created');
      }
      this.form.reset();
    }
  }

  deleteFind(i: number) {
    this.deleteId = i;
  }

  deleteRec() {
    this.client.dataDelete(this.deleteId).subscribe((response: User) => {
      this.users.splice(this.deleteId, 1);
    });
    this.toastrService.error('Record has been deleted!', 'Deleted!');
  }

  updateRec(data: User) {
    this.btnSubmit = 'Update';
    this.form.patchValue(data);
    this.userId = data.id;
  }

}

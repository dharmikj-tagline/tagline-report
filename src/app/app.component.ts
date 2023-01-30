import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { User } from './common';
import { ClientService } from './services/client.service';

// { "id": 1, "name": "Leanne Graham", "username": "Bret", "email": "Sincere@april.biz", "address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874", "geo": { "lat": "-37.3159", "lng": "81.1496" } }, "phone": "1-770-736-8031 x56442", "website": "hildegard.org", "company": { "name": "Romaguera-Crona", "catchPhrase": "Multi-layered client-server neural-net", "bs": "harness real-time e-markets" } }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline-report';
  lblAddUser: string = 'Add USer';
  lblUserData: string = 'User Data';
  lblName: string = 'Name :';
  lblUsername: string = 'Username :';
  lblEmail: string = 'Email :';
  lblPhone: string = 'Phone :';
  lblWebsite: string = 'Website :';

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
  userObservable:User[]=[];
  btnSubmit: string = 'Submit';

  constructor(
    private client: ClientService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private httpClient: HttpClient
  ) {
    this.getData();
    this.formLoad();
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
    this.client.dataGet().subscribe((res : any)=>{
      this.users = res;

      let observeData=Observable.create((observe:any)=>{
        observe.next(this.users);
        observe.complete()
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

        this.client.dataUpdate(data).subscribe((res: any) => {
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

  deleteFind(i: number) {
    this.deleteId = i;
  }

  deleteRec() {
    this.client.dataDelete(this.deleteId).subscribe((response: any) => {
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

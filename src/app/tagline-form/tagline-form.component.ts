import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-tagline-form',
  templateUrl: './tagline-form.component.html',
  styleUrls: ['./tagline-form.component.scss'],
})
export class TaglineFormComponent implements OnInit {
  reportForm!: FormGroup;

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  fullDate: any = new Date();
  Date: string = this.fullDate.getDate();
  Month: string = this.months[this.fullDate.getMonth()];
  Year: string = this.fullDate.getFullYear();

  lblClientName : string = 'Client Name';
  lblProjectName : string = 'Project Name';
  listCompletedTask: string = 'List of completed tasks:';
  listProgressTask: string = 'List of Progress tasks:';
  listPendingTask: string = 'List of Pending tasks:';
  listQuires: string = 'Queires :';
  listNotes: string = 'Notes : ';
  checkUpdate: string =
    'Please check with the latest updates and let us know your thoughts for the same.';
  done: string = '[Done]';
  thanks: string = 'Thanks,';
  err !:string;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      clientName: [''],
      projectName: [''],
      completedTask: this.fb.array([this.formControl()]),
      progressTask: this.fb.array([this.formControl()]),
      pendingTask: this.fb.array([this.formControl()]),
      queires: this.fb.array([this.formControl()]),
      notes: this.fb.array([this.formControl()]),
      yourName: [''],
    });
  }

  get formControls() {
    return this.reportForm.controls;
  }

  get completedTask() {
    return this.reportForm.get('completedTask') as FormArray;
  }

  get progressTask() {
    return this.reportForm.get('progressTask') as FormArray;
  }

  get pendingTask() {
    return this.reportForm.get('pendingTask') as FormArray;
  }

  get queires() {
    return this.reportForm.get('queires') as FormArray;
  }

  get notes() {
    return this.reportForm.get('notes') as FormArray;
  }

  addFormControl(formArray: string) {
    console.log('formArray :>> ', formArray);
    this.submitted = true;
    switch (formArray) {
      case 'completedTask':
        this.completedTask.valid && this.completedTask.push(this.formControl());
        break;
      case 'progressTask':
        this.progressTask.valid && this.progressTask.push(this.formControl());
        break;
      case 'pendingTask':
        this.pendingTask.valid && this.pendingTask.push(this.formControl());
        break;
      case 'queires':
        this.queires.valid && this.queires.push(this.formControl());
        break;
      case 'notes':
        this.notes.valid && this.notes.push(this.formControl());
        break;
      default:
        break;
    }
  }

  formControl() {
    return this.fb.control(null, [Validators.required]);
  }

  removeTask(i: number, array: any) {
    array.removeAt(i);
  }
}

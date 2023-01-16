import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tagline-form',
  templateUrl: './tagline-form.component.html',
  styleUrls: ['./tagline-form.component.scss'],
})
export class TaglineFormComponent implements OnInit {

  reportForm!: FormGroup;
  
  done: string='[Done]';
  array : any 
  months : string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  fullDate : any = new Date();
  Date : string =this.fullDate.getDate();
  Month : string = this.months[this.fullDate.getMonth()];
  Year : string =this.fullDate.getFullYear();
   
  listCompletedTask : string='List of completed tasks:';
  listProgressTask : string = 'List of Progress tasks:';
  listPendingTask : string = 'List of Pending tasks:';
  listQuiresTask : string = 'Queires :';
  listNotesTask : string = 'Notes : ';
  thanks : string = 'Thanks,';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      clientName: [''],
      projectName: [''],
      completedTask: this.fb.array([
        this.fb.control('')
      ]),
      progressTask: this.fb.array([
        this.fb.control('')
      ]),
      pendingTask: this.fb.array([
        this.fb.control('')
      ]),
      queires: this.fb.array([
        this.fb.control('')
      ]),
      notes: this.fb.array([
        this.fb.control('')
      ]),
      yourName: [''],
    });
  }

  get clientName(){
    return this.reportForm.get('clientName') as FormControl;
  }

  get projectName(){
    return this.reportForm.get('projectName') as FormControl;
  }

  get completedTask(){
    return this.reportForm.get('completedTask') as FormArray;
  }

  get progressTask(){
    return this.reportForm.get('progressTask') as FormArray;
  }

  get pendingTask(){
    return this.reportForm.get('pendingTask') as FormArray;
  }

  get queires(){
    return this.reportForm.get('queires') as FormArray;
  }

  get notes(){
    return this.reportForm.get('notes') as FormArray;
  }

  get yourName(){
    return this.reportForm.get('yourName') as FormControl;
  }

  get formControls(){
    return this.reportForm.controls;
  }

  

  addCompletedTask(event: any) {
    let completedTaskArr= this.reportForm.get('completedTask') as FormArray;
    completedTaskArr.push(this.fb.control(event.target.value));
  }

  addTask(event: any , array : any, getValue : any) {
    array= this.reportForm.get('getValue') as FormArray;
    array.push(this.fb.control(event.target.value));
  }

  addProgressTask(event: any) {
    let progressTaskArr= this.reportForm.get('progressTask') as FormArray;
    progressTaskArr.push(this.fb.control(event.target.value));
  }

  addPendingTask(event: any) {
    let pendingTaskArr= this.reportForm.get('pendingTask') as FormArray;
    pendingTaskArr.push(this.fb.control(event.target.value));
  }

  addQueiresTask(event: any) {
    let queiresArr= this.reportForm.get('queires') as FormArray;
    queiresArr.push(this.fb.control(event.target.value));
  }

  addNotesTask(event: any) {
    let notesArr= this.reportForm.get('notes') as FormArray;
    notesArr.push(this.fb.control(event.target.value));
  }


  removeCompletedTask(i: number) {
    this.completedTask.removeAt(i);
  }

  removeProgressTask(i: number) {
    this.progressTask.removeAt(i);
  }

  removePendingTask(i: number) {
    this.pendingTask.removeAt(i);
  }

  removeQueiresTask(i: number) {
    this.queires.removeAt(i);
  }

  removeNotesTask(i: number) {
    this.notes.removeAt(i);
  }

  

}

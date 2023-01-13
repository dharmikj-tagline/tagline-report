import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tagline-form',
  templateUrl: './tagline-form.component.html',
  styleUrls: ['./tagline-form.component.scss'],
})
export class TaglineFormComponent implements OnInit {

  reportForm!: FormGroup;
  clientDetail!: string;
  projectDetail!: string;
  completedDetail!: string;
  progressDetail!: string;
  pendingDetail!: string;
  queireDetail!: string;
  noteDetail!: string;
  nameDetail!: string;
  done: string='[Done]';
  listCompletedTask : string='List of completed tasks:';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reportForm = this.fb.group({
      clientName: [''],
      projectName: [''],
      completedTask: this.fb.array([]),
      progressTask: this.fb.array([]),
      pendingTask: this.fb.array([]),
      queires: this.fb.array([]),
      notes: this.fb.array([]),
      yourName: [''],
    });
  }

  get formControls(){
    return this.reportForm.controls;
  }

  get clientName(){
    return this.reportForm.get('clientName');
  }
}

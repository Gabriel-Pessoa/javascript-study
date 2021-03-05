import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { ValidateFormService } from 'src/app/shared/services/validate-form.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { Teacher } from 'src/app/shared/models/teacher';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  data$: Observable<Teacher[]>
  teacher: FormGroup;

  constructor(public validate: ValidateFormService,
    private formBuilder: FormBuilder,
    private db: DatabaseService) { }

    
  ngOnInit() {
    this.data$ = this.db.getTeachers();
    this.createForm(this.nullForm());
  }

  submit(event: Event) {
    event.preventDefault();

    this.teacher.markAllAsTouched();

    if (this.teacher.invalid) return;

    const { value } = this.teacher;

    const parseTeacher = {
      ...value,
      age: Number(value.age)
    } as Teacher;
    
    this.save(parseTeacher);

    this.restartForm();

    this.data$ = this.db.getTeachers();
  }

  restartForm() {
    this.teacher.reset();
  }

  private createForm(teacher: Teacher): void {
    this.teacher = this.formBuilder.group({
      name: [teacher.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [teacher.age, [Validators.required, Validators.min(18), Validators.max(60)]],
      email: [teacher.email, [Validators.required, Validators.maxLength(30), Validators.email]],
      discipline: [teacher.discipline, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });
  }

  private nullForm(): Teacher {
    return {
      name: null,
      age: null,
      email: null,
      discipline: null
    } as Teacher;
  }

  private save(teacher: Teacher) {
    this.db.addTeacher(teacher);
  }

}

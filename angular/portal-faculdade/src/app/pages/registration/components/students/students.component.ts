import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { ValidateFormService } from 'src/app/shared/services/validate-form.service';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  data$: Observable<Student[]>;
  student: FormGroup;

  constructor(public validate: ValidateFormService,
    private formBuilder: FormBuilder,
    private db: DatabaseService) { }

    
  ngOnInit() {
    this.data$ = this.db.getStudents();
    this.createForm(this.nullForm());
  }

  submit(event: Event) {
    event.preventDefault();

    this.student.markAllAsTouched();

    if (this.student.invalid) return;

    const { value } = this.student;

    const parseStudent = {
      ...value,
      age: Number(value.age)
    } as Student;
    
    this.save(parseStudent);

    this.restartForm();

    this.data$ = this.db.getStudents();
  }

  restartForm() {
    this.student.reset();
  }

  private createForm(student: Student): void {
    this.student = this.formBuilder.group({
      name: [student.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [student.age, [Validators.required, Validators.min(18), Validators.max(60)]],
      email: [student.email, [Validators.required, Validators.maxLength(30), Validators.email]],
      course: [student.course, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });
  }

  private nullForm(): Student {
    return {
      name: null,
      age: null,
      email: null,
      course: null
    } as Student;
  }

  private save(student: Student) {
    this.db.addStudent(student);
  }

}

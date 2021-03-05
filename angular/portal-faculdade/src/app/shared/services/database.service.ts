import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { getData, setData } from '../../../assets/db';

import { Teacher } from './../models/teacher';
import { Student } from './../models/student';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor() { }

  getTeachers(): Observable<Teacher[]> {
    return of(getData().teachers).pipe(delay(2000));
  }

  getStudents(): Observable<Student[]> {
    return of(getData().students).pipe(delay(2000));
  }

  addTeacher(teacher: Teacher): Observable<Teacher> {
    const teachers = getData().teachers;
    teachers.push(teacher);
    setData({ ...getData(), teachers });
    return of(teacher).pipe(delay(2000));
  }

  addStudent(student: Student): Observable<Student> {
    const students = getData().students;
    students.push(student);
    setData({ ...getData(), students });
    return of(student).pipe(delay(2000));
  }

}

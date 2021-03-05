import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { reduce } from 'rxjs/operators'

import { DatabaseService } from 'src/app/shared/services/database.service';
import { Student } from './../../shared/models/student';
import { Teacher } from './../../shared/models/teacher';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  qtyTeacher$: Observable<number>;
  qtyStudent$: Observable<number>;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.qtyTeacher$ = this.db.getTeachers().pipe(
      reduce<Teacher[], number>((acc, curr) => curr.length, 0)
    );
    this.qtyStudent$ = this.db.getStudents().pipe(
      reduce<Student[], number>((acc, curr) => curr.length, 0)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { } // Injetei dependência Activated para capturar parâmetros na rota

    ngOnInit(): void {
        //Instanciando atributo, atribuindo o id através da instância do ActivatedRoute
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Err: ', err)
        });
    }

    //Salva alterações no formulário
    save(): void {
        this.courseService.save(this.course).subscribe({
            next: course => console.log(`Saved with success`, course),
            error: err => console.log('Error: ', err)
        });
    }
}
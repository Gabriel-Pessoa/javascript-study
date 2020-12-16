import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

//Decorator que diz ao angular que essa classe: "CourseListComponent" é um componente.
@Component({
    //Declaro o selector html onde será injetado essa página no html global
    //selector: 'app-course-list', // Como está usando rota, não tem mais a necessidade de selector
    //Declaro o template html que construi esse componente
    templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string = '';


    constructor(private courseService: CourseService) { } //Injetando dependência

    // É inicializador assim que o componente é carregado. 
    // Tem haver com o ciclo de vida do componente.
    ngOnInit(): void {
        this.retriveAll();
    }

    // Retorna todos os cursos cadastrados
    retriveAll(): void {
        //Subscrevendo no Observable para escutar o evento
        this.courseService.retriveAll().subscribe({
            // Retorno do observable, no caso uma array de course
            next: courses => {
                this._courses = courses; // Atribuo o retorno do observable ao nosso atributo local
                this.filteredCourses = this._courses; // Uma garantia a mais, por se tratar de uma callback e não uma promise.
            },
            error: err => console.log('Error: ', err)
        });
    }


    //Deleta um curso
    deleteById(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retriveAll(); // Refaz chamada para atualizar
            },
            error: err => console.log('Error: ', console.log(err))
        })
    }


    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
    }

    get filter() {
        return this._filterBy;
    }
}

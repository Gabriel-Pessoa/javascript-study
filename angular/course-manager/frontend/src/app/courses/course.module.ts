import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseListComponent,
    ],
    imports: [
        // Coisas essencias no Angular: pipe, diretivas padrões
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        // Rotas vão ser carregadas quando o módulo for carregado.
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule { }
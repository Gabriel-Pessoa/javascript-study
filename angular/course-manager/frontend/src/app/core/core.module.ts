import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarCompoment } from './component/nav-bar/nav-bar.component';
import { Error404Component } from './component/error-404/error-404.component';

@NgModule({
    declarations: [
        NavBarCompoment,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', // Não achar rota
                component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarCompoment
    ]
})
export class CoreModule { }
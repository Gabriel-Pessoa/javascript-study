import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TabsComponent } from './containers/tabs/tabs.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    TabsComponent,
    StudentsComponent,
    TeachersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TabsComponent }
    ]),
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    ComponentsModule,
  ]
})
export class RegistrationModule { }

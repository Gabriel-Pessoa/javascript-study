import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FormFieldComponent } from './form-field/form-field.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    TableComponent,
    FormFieldComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    TableComponent,
    FormFieldComponent,
  ]
})
export class ComponentsModule { }

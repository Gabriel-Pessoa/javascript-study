import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidateFormService } from './../../services/validate-form.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent {

  @Input() label: string;
  @Input() type: string = 'text';
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validate: ValidateFormService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}

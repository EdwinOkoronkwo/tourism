import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GetCityNamesService } from '../../services/get-city-names.service';
import { prohibited } from '../../custom-validator';
import { InputComponent } from '../input/input.component';
import { DividerComponent } from '../../shared/divider/divider.component';

@Component({
  selector: 'app-tech-ideas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    DividerComponent,
  ],
  templateUrl: './tech-ideas.component.html',
  styleUrl: './tech-ideas.component.css',
})
export class TechIdeasComponent {
  cities: string[] = [];
  techIdeasForm: FormGroup;
  constructor(
    private _cityName: GetCityNamesService,
    private formBuilder: FormBuilder
  ) {
    this.cities = this._cityName.getNames();

    this.techIdeasForm = formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
          prohibited(/tourist/),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]?$/)]],
      city: ['', [Validators.required]],
      brief: [
        '',
        [Validators.required, Validators.minLength(100), prohibited(/nothing/)],
      ],
    });
  }

  // onSubmit() {
  //   console.log(this.techIdeasForm.value);
  // }

  // Getter
  get nameFormControl() {
    return this.techIdeasForm.get('name');
  }

  get emailFormControl() {
    return this.techIdeasForm.get('email');
  }

  get phoneFormControl() {
    return this.techIdeasForm.get('phone');
  }

  onSubmit() {
    console.log('Form was submitted');
  }
}

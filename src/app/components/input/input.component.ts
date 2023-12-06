import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TechIdeasComponent } from '../tech-ideas/tech-ideas.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, TechIdeasComponent, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() cities!: string;

  showErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}

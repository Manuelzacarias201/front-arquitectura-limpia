import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherService } from '../../services/teacher-service.service';

@Component({
  selector: 'form-teacher',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-teachers.component.html',
  styleUrl: './form-teachers.component.scss'
})
export class FormTeacher {
  teacherForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private teacherService: TeacherService) {
    this.teacherForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      asignature: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      this.teacherService.createTeacher(this.teacherForm.value).subscribe({
        next: (response) => {
          console.log('Profesor registrado:', response);
          this.message = 'Profesor registrado con éxito';
          this.teacherForm.reset();
        },
        error: (error) => {
          console.error('Error al registrar profesor:', error);
          this.message = 'Error al registrar profesor';
        }
      });
    } else {
      this.message = 'Formulario inválido. Verifica los campos.';
    }
  }
}
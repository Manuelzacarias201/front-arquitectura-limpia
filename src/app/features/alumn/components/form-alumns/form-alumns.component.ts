import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../services/student-service.service';

@Component({
  selector: 'form-alumn',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-alumns.component.html',
  styleUrl: './form-alumns.component.scss'
})
export class FormAlumn {
  studentForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      matricula: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    });
  }

  onSubmit(): void {
    if (this.studentForm.valid) {
      this.studentService.createAlumn(this.studentForm.value).subscribe({
        next: (response) => {
          console.log('Estudiante registrado:', response);
          this.message = 'Estudiante registrado con éxito';
          this.studentForm.reset();
        },
        error: (error) => {
          console.error('Error al registrar estudiante:', error);
          this.message = 'Error al registrar estudiante';
        }
      });
    } else {
      this.message = 'Formulario inválido. Verifica los campos.';
    }
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { TeacherService } from '../../services/teacher-service.service';
import { Teacher } from '../../data/models/teacher';

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  template: `
  <h1>Editar Teacher</h1>
<div>
  <form #alumnForm="ngForm">
    <div>
      <label for="name">Nombre</label>
      <input id="name" [(ngModel)]="data.name" name="name" required>
    </div>

    <div>
      <label for="matricula">Matricula</label>
      <input id="matricula" [(ngModel)]="data.asignature" name="matricula" required>
    </div>
  </form>
</div>

<div>
  <button (click)="closeDialog()">Cancelar</button>
  <button [disabled]="!alumnForm.form.valid" (click)="updateTeacher()">Actualizar</button>
</div>
  `,
  styleUrl: './edit-teacher.component.scss'
})
export class EditTeacherComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTeacherComponent>,
    private service: TeacherService,
    @Inject(MAT_DIALOG_DATA) public data: Teacher
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateTeacher(): void {
    const updatedTeacher: Teacher = {
      id: this.data.id,
      name: this.data.name,
      asignature: this.data.asignature
    };
    this.service.updateTeacher(updatedTeacher).subscribe({
      next: (response: Teacher) => {
        console.log('Teacher actualizado exitosamente:', response);
      },
      error: (error: any) => {
        console.error('Error al actualizar el teacher:', error);
      }
    });
  }
}
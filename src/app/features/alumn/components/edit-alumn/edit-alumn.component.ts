import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { Alumn } from '../../data/models/alumn';
import { StudentService } from '../../services/student-service.service';
@Component({
  selector: 'app-edit-alumn',
  styleUrl: './edit-alumn.component.scss',
  template: `
  <h1>Editar Alumno</h1>
<div>
  <form #alumnForm="ngForm">
    <div>
      <label for="name">Nombre</label>
      <input id="name" [(ngModel)]="data.name" name="name" required>
    </div>

    <div>
      <label for="matricula">Matricula</label>
      <input id="matricula" [(ngModel)]="data.matricula" name="matricula" required>
    </div>
  </form>
</div>

<div>
  <button (click)="closeDialog()">Cancelar</button>
  <button [disabled]="!alumnForm.form.valid" (click)="updateAlumn()">Actualizar</button>
</div>
  `,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ]
})
export class EditAlumnComponent {
  constructor(
    public dialogRef: MatDialogRef<EditAlumnComponent>,
    private service: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: Alumn
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateAlumn(): void {
    const updatedAlumn: Alumn = {
      id: this.data.id,
      name: this.data.name,
      matricula: this.data.matricula
    };

    this.service.updateAlumn(updatedAlumn).subscribe({
      next: (response: Alumn) => {
        console.log('Alumno actualizado exitosamente:', response);
      },
      error: (error: any) => {
        console.error('Error al actualizar el alumno:', error);
      }
    });
    this.closeDialog()
  }
}
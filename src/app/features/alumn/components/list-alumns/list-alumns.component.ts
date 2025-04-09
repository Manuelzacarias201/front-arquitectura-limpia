import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service.service';
import { Alumn } from '../../data/models/alumn';
import { MatDialog } from '@angular/material/dialog';
import { EditAlumnComponent } from '../edit-alumn/edit-alumn.component';
import Swal from 'sweetalert2';  // Importa SweetAlert2

@Component({
  selector: 'students-list',
  standalone: true,
  templateUrl: './list-alumns.component.html',
  styleUrls: ['./list-alumns.component.scss']  // Asegúrate de usar styleUrls (plural)
})
export class AlumnListComponent implements OnInit {
  students: Alumn[] = [
    {id:12, name:"asd", matricula:"asd"}
  ];

  constructor(private studentService: StudentService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAlumns().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error al obtener los estudiantes:', error);
      }
    });
  }

  deleteStudent(id: number): void {
    Swal.fire({
      title: '¿Estás seguro de eliminar este estudiante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteAlumn(id).subscribe({
          next: () => {
            Swal.fire('Eliminado!', 'El estudiante ha sido eliminado.', 'success');
            this.loadStudents();
          },
          error: (error) => {
            Swal.fire('Error', 'Error al eliminar el estudiante: ' + error.message, 'error');
          }
        });
      }
    });
  }

  editStudent(alumn: Alumn): void {
    this.dialog.open(EditAlumnComponent, { data: { ...alumn } });
  }
}

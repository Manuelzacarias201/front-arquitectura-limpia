import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../services/teacher-service.service';
import { Teacher } from '../../data/models/teacher';
import { EditTeacherComponent } from '../edit-teacher/edit-teacher.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'teachers-list',
  standalone: true,
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.scss'
})
export class ListTeachersComponent implements OnInit {

  ngOnInit(): void {
    this.loadTeachers();
  }

  teachers: Teacher[] = []

  constructor(private teacherService: TeacherService, private dialog: MatDialog) { }

  loadTeachers(): void {
    this.teacherService.getTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
      },
      error: (error) => {
        console.error('Error al obtener los profesores:', error);
      }
    });
  }

  deleteTeacher(teacher_id: number): void {
    Swal.fire({
      title: '¿Estás seguro de eliminar este estudiante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.teacherService.deleteTeacher(teacher_id).subscribe({
          next: () => {
            this.loadTeachers();
          },
          error: (error) => {
            console.error('Error al eliminar el profesor:', error);
          }
        });
      }
    })
  }

  editTeacher(teacher: Teacher): void {
    this.dialog.open(EditTeacherComponent, { data: { ...teacher } });
  }
}
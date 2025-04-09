import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { Teacher } from '../data/models/teacher';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiURL = 'http://localhost:8080/teachers';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiURL).pipe(
      catchError(this.handleError));
  }

  getTeacherById(teacher_id: number): Observable<Teacher> {
    return this.http.get<Teacher | null>(`${this.apiURL}/${teacher_id}`).pipe(
      map((teacher) => {
        if (!teacher) {
          throw new HttpErrorResponse({
            status: 404,
            statusText: 'Profesor no encontrado'
          });
        }
        return teacher;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Profesor no encontrado' }));
        }
        return throwError(() => error);
      })
    );
  }

  createTeacher(teacher: Teacher): Observable<any> {
    return this.http.post<any>(this.apiURL, teacher);
  }

  deleteTeacher(teacher_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${teacher_id}`);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${teacher.id}`, teacher, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
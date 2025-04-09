import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { Alumn } from '../data/models/alumn';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = 'http://localhost:8080/alumns';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getAlumns(): Observable<Alumn[]> {
    return this.http.get<Alumn[]>(this.apiURL).pipe(
      catchError(this.handleError));
  }

  getAlumnById(alumn_id: number): Observable<Alumn> {
    return this.http.get<Alumn | null>(`${this.apiURL}/${alumn_id}`).pipe(
      map((alumn) => {
        if (!alumn) {
          throw new HttpErrorResponse({
            status: 404,
            statusText: 'Alumno no encontrada'
          });
        }
        return alumn;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Alumno no encontrado' }));
        }
        return throwError(() => error);
      })
    );
  }

  createAlumn(student: Alumn): Observable<any> {
    return this.http.post<any>(this.apiURL, student);
  }

  deleteAlumn(alumn_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${alumn_id}`);
  }

  updateAlumn(alumn: Alumn): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/${alumn.id}`, alumn, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

}
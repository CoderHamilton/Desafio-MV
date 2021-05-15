import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Colaborador } from './colaborador.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseUrl ="http://localhost:8080/colaboradores";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ["msg-success"]
    })
  }

  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.baseUrl, colaborador).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Colaborador> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Colaborador>(url).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.baseUrl}/${colaborador.id}`
    return this.http.put<Colaborador>(url, colaborador).pipe(
      map(obj => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Colaborador> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Colaborador>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}

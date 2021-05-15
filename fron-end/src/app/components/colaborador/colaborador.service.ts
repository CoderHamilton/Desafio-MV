import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Colaborador } from './colaborador.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  baseUrl ="http://localhost:8080/colaboradores";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.baseUrl, colaborador)
  }

  read(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.baseUrl)
  }

  readById(id: string): Observable<Colaborador> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Colaborador>(url)
  }

}

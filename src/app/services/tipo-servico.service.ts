import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { TipoServico } from '../shared/TipoServico';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const apiUrl = "http://localhost:8088/agenda-digital/tiposervico";
@Injectable({
  providedIn: 'root'
})

export class TipoServicoService {

  constructor(private http: HttpClient) { }

  getTipoServicos() : Observable<TipoServico[]> { 
    return this.http.get<TipoServico[]>(apiUrl).pipe(
      tap(tipoServicos => console.log('fetched tipoServicos')),
      catchError(this.handleError('getTipoServicos', []))
    );
  }

  addTipoServicos(tipoServico): Observable<TipoServico> {
    return this.http.post<TipoServico>(apiUrl, tipoServico, httpOptions).pipe(
      tap((tipoServico: TipoServico) => console.log('adicionou o tipoServico ' + tipoServico)),
      catchError(this.handleError<TipoServico>('addTipoServicos'))
    );
  }

  updateTipoServico(id: number, tipoServico: TipoServico): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, tipoServico, httpOptions).pipe(
      tap(tipoServico => console.log(`Altera tipoServicos por id=${id}`)),
      catchError(this.handleError<TipoServico>('updateTipoServico'))
    );
  }

  getTipoServicoPorId(id: number): Observable<TipoServico> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<TipoServico>(url).pipe(
      tap(tipoServico => console.log(`Busca tipoServicos por id=${id}`)),
      catchError(this.handleError<TipoServico>(`Busca tipoServicos por id=${id}`))
    );
  }

  deleteTipoServico(id: number): Observable<TipoServico> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<TipoServico>(url, httpOptions).pipe(
      tap(tipoServico => console.log(`Deleta tipoServicos por id=${id}`)),
      catchError(this.handleError<TipoServico>(`Deleta tipoServicos por id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

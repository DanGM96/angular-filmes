import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Categoria } from '../shared/Categorias';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const apiUrl = "http://localhost:3000/categorias";
@Injectable({
  providedIn: 'root'
})

export class CategoriasApiService {

  constructor(private http: HttpClient) { }

  getCategorias() : Observable<Categoria[]> { 
    return this.http.get<Categoria[]>(apiUrl).pipe(
      tap(categorias => console.log('fetched categorias')),
      catchError(this.handleError('getCategorias', []))
    );
  }

  addCategorias(categoria): Observable<Categoria> {
    return this.http.post<Categoria>(apiUrl, categoria, httpOptions).pipe(
      tap((categoria: Categoria) => console.log('adicionou a categoria ' + categoria)),
      catchError(this.handleError<Categoria>('addcategorias'))
    );
  }

  updateCategoria(id: number, categoria: Categoria): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, categoria, httpOptions).pipe(
      tap(categoria => console.log(`Altera categorias por id=${id}`)),
      catchError(this.handleError<Categoria>('updateCategoria'))
    );
  }

  getCategoriaPorId(id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Categoria>(url).pipe(
      tap(categoria => console.log(`Busca categorias por id=${id}`)),
      catchError(this.handleError<Categoria>(`Busca categorias por id=${id}`))
    );
  }

  deleteCategoria(id: number): Observable<Categoria> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Categoria>(url, httpOptions).pipe(
      tap(categoria => console.log(`Deleta categorias por id=${id}`)),
      catchError(this.handleError<Categoria>(`Deleta categorias por id=${id}`))
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

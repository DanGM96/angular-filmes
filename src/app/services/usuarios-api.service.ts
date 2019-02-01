import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

const apiUrl = "http://localhost:3000/usuarios";
@Injectable({
  providedIn: 'root'
})

export class UsuariosApiService {

  constructor() { }
}

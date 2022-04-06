import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //getAllServicos(tipoCategora: string, tipoAtendimento, tipoMotivo):Observable<Categoria[]>{
  //  return this.http.get<Categoria[]>('https://livefreegeneration.herokuapp.com/categoria/search?categoria=${tipoCategoria}&atendimento=&{}', this.token)
  //}

  //colocar o get já fltrado

  getByIdServicos(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(`https://livefreegeneration.herokuapp.com/categoria/${id}`, this.token)
  }

}

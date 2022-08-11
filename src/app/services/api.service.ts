import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../contact/Personne';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = "http://localhost:3000/contacts";

  constructor(private http: HttpClient) {

  }

  getAllContacts(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.API_URL);
  }

  getById(id: number): Observable<Personne>{
    return this.http.get<Personne>(this.API_URL + `findById/${id}`);
  }

  getByFirstName(firstName: string): Observable<Personne[]>{
    return this.http.get<Personne[]>(this.API_URL + `findByFirstName/${firstName}`);
  }

  getBytName(name: string): Observable<Personne[]>{
    return this.http.get<Personne[]>(this.API_URL + `findByName/${name}`);
  }


  getByNum(num: string): Observable<Personne[]>{
    return this.http.get<Personne[]>(this.API_URL + `findByNum/${num}`);
  }
}

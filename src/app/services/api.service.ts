import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../contact/Personne';


@Injectable({
	providedIn: 'root',
})
export class ApiService {

	private readonly API_URL: string = 'http://localhost:3000/contacts/';

	constructor(private readonly http: HttpClient) {

	}

	getAllContacts(): Observable<Contact[]> {
		return this.http.get<Contact[]>(this.API_URL);
	}

	getById(id: number): Observable<Contact>{
		return this.http.get<Contact>(`${this.API_URL  }findById/${id}`);
	}

	getByFirstName(firstname: string): Observable<Contact[]>{
		return this.http.get<Contact[]>(`${this.API_URL  }findByFirstName/${firstname}`);
	}

	getByName(name: string): Observable<Contact[]>{
		return this.http.get<Contact[]>(`${this.API_URL  }findByName/${name}`);
	}


	getByNum(num: string): Observable<Contact[]>{
		return this.http.get<Contact[]>(`${this.API_URL  }findByNum/${num}`);
	}

	addContact(contact: Contact){
		return this.http.post(this.API_URL, contact);
	}

	setContact(id: number, contact: Contact){
		return this.http.patch(`${this.API_URL  }set/${id}`, contact);
	}

	deleteContact(id: number){
		return this.http.delete(`${this.API_URL  }delete/${id}`);
	}
}

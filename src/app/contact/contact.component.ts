import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Contact } from './Personne';


@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

	contacts: Contact[] = [];
	currentPg!: number;
	itemsNumber!: number;
	
	

	constructor(private readonly apiService: ApiService,
              private readonly router: Router){}

	ngOnInit(){
		this.currentPg = 1;
		this.itemsNumber = 3;
		this.apiService.getAllContacts().subscribe(result=>this.assignResult(result));	
	}

	assignResult(res: any){
		this.contacts = res;
	}


	public deleteContact(id: number){
		this.apiService.deleteContact(id).subscribe();
		window.location.reload();
	}

	public redirectForUpdate(id: number){
		this.router.navigate([`/set/${id}`]);
	}

	inc(){
		if (this.itemsNumber < this.contacts.length){
			this.itemsNumber += 3;
		}
		this.currentPg = 1;
		
	}

	dec(){
		if (this.itemsNumber > 3){
			this.itemsNumber -= 3;
		}
		this.currentPg = 1;
	}
  

}

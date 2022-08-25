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
	isAsc?: boolean = false;
	
	constructor(private readonly apiService: ApiService,
              private readonly router: Router){}

	ngOnInit(){
		this.currentPg = 1;
		this.itemsNumber = 6;

		this.apiService.getAllContacts().subscribe(
			(contacts) => {
				this.contacts = contacts;
			},
		);
	}

	sortAscDesc(order: string){
		this.apiService.getAllContacts().subscribe(
			(contacts) => {
				this.contacts = contacts;
				this.contacts = this.contacts.sort((a, b)=>{
					let arg1 = '';
					let arg2 = '';
					if (order=='name'){
						arg1 = a.name.toUpperCase(); // ignore upper and lowercase
						arg2 = b.name.toUpperCase(); // ignore upper and lowercase
					} else if (order=='firstname'){
						arg1 = a.firstname.toUpperCase(); 
						arg2 = b.firstname.toUpperCase(); 
					} else {
						arg1 = a.phone.toUpperCase(); 
						arg2 = b.phone.toUpperCase();
					}
					
					if (this.isAsc===false){
						if (arg1 < arg2) {
							return -1;
						} else if (arg1 > arg2) {
							return 1;
						} else {
							return 0;
						}
					} else {
						if (arg1 > arg2) {
							return -1;
						} else if (arg1 < arg2) {
							return 1;
						} else {
							return 0;
						}
					}
				});
			},
		);
		this.isAsc = !this.isAsc;
	}


	deleteContact(id: number){
		this.apiService.deleteContact(id).subscribe();
		window.location.reload();
	}

	redirectForUpdate(id: number){
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

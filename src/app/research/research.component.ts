import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact/Personne';
import { ApiService } from '../services/api.service';


@Component({
	selector: 'app-research',
	templateUrl: './research.component.html',
	styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements OnInit {

	contacts: Contact[] = [];
	critere!: string;
	chaine!: string;
	currentPg!: number;
	itemsNumber!: number;
	isAsc?: boolean = false;

	constructor(private readonly apiService: ApiService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { }

	ngOnInit(): void {
		this.currentPg = 1;
		this.itemsNumber = 3;
		this.critere = String(this.route.snapshot.paramMap.get('critere'));
		this.chaine = String(this.route.snapshot.paramMap.get('chaine'));

		this.apiService.getBySearch(this.critere, this.chaine).subscribe(
			(contacts) => {
				this.contacts = contacts;
			},
		);

	}

	deleteContact(id: number){
		this.apiService.deleteContact(id).subscribe(
			() => this.router.navigate(['']),
			(erreur) => console.log(erreur),
		);
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

	sortAscDesc(order: string){
		this.apiService.getBySearch(this.critere, this.chaine).subscribe(
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
    
}

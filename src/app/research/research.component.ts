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

	constructor(private readonly apiService: ApiService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) { }

	ngOnInit(): void {
		this.currentPg = 1;
		this.itemsNumber = 3;
		this.critere = String(this.route.snapshot.paramMap.get('critere'));
		this.chaine = String(this.route.snapshot.paramMap.get('chaine'));

		if (this.critere=='firstname'){
			this.getByFirstName();
		} else if (this.critere=='name'){
			this.getByName();
		} else if (this.critere=='phone'){
			this.getByNum();
		}
	}

	getByFirstName(){
		this.apiService.getByFirstName(this.chaine).subscribe(
			(contacts) => {
				this.contacts = contacts;
			},
		);
	}

	getByName(){
		this.apiService.getByName(this.chaine).subscribe(
			(contacts) => {
				this.contacts = contacts;
			},
		);
	}

	getByNum(){
		this.apiService.getByNum(this.chaine).subscribe(
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
  

  
}
